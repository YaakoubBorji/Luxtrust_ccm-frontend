import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/services/authentification/auth.service';
import { MarketPositionService } from '../shared/services/position/market-position.service';
import { User } from '../shared/models/user.model';
import { Position } from '../shared/models/position.model';
import { ApiResponse } from '../shared/models/api-response.model';

@Component({
  selector: 'app-position-facade',
  templateUrl: './position-facade.component.html',
  styleUrls: ['./position-facade.component.css']
})
export class PositionFacadeComponent implements OnInit {

  public user : User;
  public openPositions : Position[];
  public soldPositions : Position[];
  public success : boolean;
  public error : boolean;
  public message : string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService : AuthService, private marketPositionService : MarketPositionService) { }

  ngOnInit() {
    this.getPosition();
  }
  getPosition(){
    this.marketPositionService.getAllOpenPosition().subscribe((p) => {this.openPositions=p});
    this.marketPositionService.getAllSoldPosition().subscribe((p) => {this.soldPositions=p});
  }

  buyPosition(positionId: number){
    this.marketPositionService.buyPosition(positionId).subscribe((apiResponse :ApiResponse)=>{
      this.success= true;
      this.message= apiResponse.message;
      this.getPosition();

    },(apiResponse :ApiResponse) =>{
      this.error= true;
      this.message= apiResponse.message;
    });
  }

  deletePosition(positionId: number){
    this.marketPositionService.deletePosition(positionId).subscribe((apiResponse :ApiResponse)=>{
      this.success= true;
      this.error= false;
      this.message= apiResponse.message;
      this.getPosition();

    },(apiResponse :ApiResponse) =>{
      this.error= true;
      this.success= false;
      this.message= "ERROR Forbidden, you need administrator role for deleting other position...";
    });
  }
}
