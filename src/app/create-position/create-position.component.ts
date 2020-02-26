import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/services/users/user.service';
import { Observable } from 'rxjs';
import { MarketPositionService } from '../shared/services/position/market-position.service';
import { Position } from '../shared/models/position.model';
import { ApiResponse } from '../shared/models/api-response.model';
import { AuthService } from '../shared/services/authentification/auth.service';

@Component({
  selector: 'app-create-position',
  templateUrl: './create-position.component.html',
  styleUrls: ['./create-position.component.css']
})
export class CreatePositionComponent implements OnInit {

  public createPositionForm: FormGroup;
  public sucess: boolean;
  public error: boolean;
  public message:string;
  constructor( private fb: FormBuilder,
    private authService: AuthService, private marketPositionService: MarketPositionService  ) { }

  ngOnInit() {
    this.createPositionForm = this.fb.group({
      currency: ["", [Validators.required], this.loginValidatorAsync.bind(this)],
      amount: ["", Validators.required]
    });
  }

  addPosition(){
    if (this.createPositionForm.status === "VALID") {
      
      const position = this.createPositionForm.value;
      position.status= "open";
      position.user= this.authService.getConnectedUser();
      console.log(position.user);
      this.marketPositionService.addPosition(position).subscribe((apiResponse: ApiResponse)=>{
        this.sucess=true;
        this.message = apiResponse.message;
      }, (apiResponse: ApiResponse)=>{
        this.error=true;
        this.message = apiResponse.message;
      });

    }
  }

  loginValidatorAsync(
    formControl: FormControl
  ): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
    return new Promise((resolve) => {
      if (formControl.pristine) resolve(null);
      setTimeout(() => {
        resolve(null);
      }, 3000);
    });
  }

  public verifier(formControlName: string, errorName: string): boolean {
    return (
      this.createPositionForm.get(formControlName).dirty &&
      this.createPositionForm.get(formControlName).hasError(errorName)
    );
  }
}
