import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { AuthService } from '../shared/services/authentification/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/users/user.service';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';
import {  ApiResponse} from '../shared/models/api-response.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public erreurMessage : string;
  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  public createUserForm: FormGroup;
  public roles: Array<User>;
  public sucess: boolean;
  public error: boolean;
  public message:string;


  ngOnInit() {
    this.createUserForm = this.fb.group({
      userName: ["", [Validators.required], this.loginValidatorAsync.bind(this)],
      firstName: ["", Validators.required],
      familyName: ["", Validators.required],
      role: ["", Validators.required]
    });

    this.userService.getRoles().subscribe(roles =>{
      this.roles = roles;
    })
    
  }
  writeValue(value): User{
    let user : User= new User(null,value.userName,value.firstName,value.familyName,value.role.roleName,null);
    return user;
  }
  
  addUser() {
    if (this.createUserForm.status === "VALID") {
      this.userService.createUser(this.writeValue(this.createUserForm.value)).subscribe((apiResponse: ApiResponse ) => {
       
       this.sucess=true;
       this.message = apiResponse.message;
      },(apiResponse: ApiResponse) => {
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
      this.createUserForm.get(formControlName).dirty &&
      this.createUserForm.get(formControlName).hasError(errorName)
    );
  }


}
