var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { UserService } from "../users/user.service";
import { Observable } from "rxjs";
var AuthService = /** @class */ (function () {
    function AuthService(userService) {
        this.userService = userService;
    }
    /* public login(credential: Credential): Observable<boolean> {
      let obs: Observable<boolean> = new Observable( observer => {
  
        this.userService.getUserByLoginPassword(credential).subscribe(u => {
          let user = u;
          console.log(user);
          if (user) {
            //localStorage.setItem('key', 'value');
            //Make sure to stringify value, for example if you have an object
            localStorage.setItem("connectedUser", JSON.stringify(user));
            observer.next(true);
           
          }else{
             observer.next(false);
          }
        });
      });
      return obs;
    }*/
    AuthService.prototype.isConnected = function () {
        //And to retrieve data from localstorage
        var user = JSON.parse(sessionStorage.getItem("connectedUser"));
        return user ? true : false;
    };
    AuthService.prototype.getConnectedUser = function () {
        //And to retrieve data from localstorage
        var user = JSON.parse(sessionStorage.getItem("connectedUser"));
        return user;
    };
    AuthService.prototype.logout = function () {
        //And to retrieve data from localstorage
        sessionStorage.removeItem("connectedUser");
    };
    AuthService.prototype.login = function (credential) {
        var _this = this;
        return new Observable(function (observer) {
            _this.userService.getUserByLoginPassword(credential).subscribe(function (user) {
                console.log(user);
                if (user) {
                    //localStorage.setItem('key', 'value');
                    //Make sure to stringify value, for example if you have an object
                    user.authData = window.btoa(user.username + ':' + credential.password);
                    sessionStorage.setItem("connectedUser", JSON.stringify(user));
                    observer.next(true);
                }
                else {
                    observer.next(false);
                }
            }, function (err) { observer.error(err); }, function () { });
        });
    };
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [UserService])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map