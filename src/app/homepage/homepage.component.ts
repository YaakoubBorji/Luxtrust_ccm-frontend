import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/services/authentification/auth.service';
import { User } from '../shared/models/user.model';
import { Position } from '../shared/models/position.model';
import { MarketPositionService } from '../shared/services/position/market-position.service';
import { ApiResponse } from '../shared/models/api-response.model';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public user : User;
  public openPositions : Position[];
  public soldPositions : Position[];
  public success : boolean;
  public error : boolean;
  public message : string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService : AuthService, private marketPositionService : MarketPositionService) { }

  ngOnInit() {
   this.user =  this.authService.getConnectedUser();
  }

  getUserDetails(){
    this.router.navigate(['users'], { relativeTo: this.activatedRoute })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login'], { relativeTo: this.activatedRoute });
  }

 

}
