import { Credential } from "../../models/credential.model";
import { User } from "../../models/user.model";
import { Injectable } from "@angular/core";
import { UserService } from "../users/user.service";
import { Observable } from "rxjs";
import { nextTick } from "q";

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  public isConnected(): boolean {
    //And to retrieve data from localstorage
    let user: User = JSON.parse(sessionStorage.getItem("connectedUser"));
    return user ? true : false;
  }

  public getConnectedUser(): User {
    //And to retrieve data from localstorage
    let user: User = JSON.parse(sessionStorage.getItem("connectedUser"));
    return user;
  }

  public logout(): void {
    //And to retrieve data from localstorage
    sessionStorage.removeItem("connectedUser");
  }

  public login(credential: Credential): Observable<boolean> {
      return new Observable(observer =>{
         this.userService.getUserByLoginPassword(credential).subscribe(
           (user: User) => {
             console.log(user);
             if (user) {
               //localStorage.setItem('key', 'value');
               //Make sure to stringify value, for example if you have an object
               user.authData = window.btoa(user.userName + ':' + credential.password);
               sessionStorage.setItem("connectedUser", JSON.stringify(user));
               observer.next(true);
              }else{
                observer.next(false);
              }
           },
           err => {observer.error(err);},
           () => {}
         );
      })
  }
}
