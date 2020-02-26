var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from "@angular/router";
import { AuthService } from "./../shared/services/authentification/auth.service";
import { UserService } from "./../shared/services/users/user.service";
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, userService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            login: ["", [], this.loginValidatorAsync.bind(this)],
            password: ["", Validators.required]
        });
    };
    LoginComponent.prototype.doSend = function () {
        var _this = this;
        if (this.loginForm.status === "VALID") {
            this.authService.login(this.loginForm.value).subscribe(function (x) {
                console.log("x ====> " + x);
                if (x) {
                    _this.router.navigate(["/home"]);
                }
                else {
                    alert("Erreur");
                }
            });
        }
    };
    LoginComponent.prototype.loginValidatorAsync = function (formControl) {
        return new Promise(function (resolve, reject) {
            if (formControl.pristine)
                resolve(null);
            setTimeout(function () {
                resolve(null);
            }, 3000);
        });
    };
    LoginComponent.prototype.verifier = function (formControlName, errorName) {
        return (this.loginForm.get(formControlName).dirty &&
            this.loginForm.get(formControlName).hasError(errorName));
    };
    LoginComponent = __decorate([
        Component({
            selector: "app-login",
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.css"]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            AuthService,
            Router,
            UserService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map