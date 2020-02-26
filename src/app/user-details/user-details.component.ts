import { AuthService } from './../shared/services/authentification/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/users/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  public user : User;
  public error : boolean;
  public message : string;

  constructor(private router: Router,private activatedRoute: ActivatedRoute,private authService : AuthService, private userService: UserService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let userName = paramMap.get('id');
      this.userService.getUserByUserName(userName).subscribe((user)=>{
        this.user=user;
        this.error=false;
      
      },()=>{
        this.error = true;
        this.message = "ERROR Forbidden, you need administrator role for displaying other users...";
      });
    });
    
  }
  deconnecter() : void{
      this.authService.logout();
      this.router.navigate([""]);
  }
}