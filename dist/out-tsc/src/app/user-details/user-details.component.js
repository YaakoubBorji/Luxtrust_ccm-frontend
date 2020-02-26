var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AuthService } from './../shared/services/authentification/auth.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(router, activatedRoute, authService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            _this.id = paramMap.get('id');
            _this.name = paramMap.get('mustapha');
        });
        this.connectedUser = this.authService.getConnectedUser();
    };
    UserDetailsComponent.prototype.deconnecter = function () {
        this.authService.logout();
        this.router.navigate([""]);
    };
    UserDetailsComponent = __decorate([
        Component({
            selector: 'app-user-details',
            templateUrl: './user-details.component.html',
            styleUrls: ['./user-details.component.css']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, AuthService])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
export { UserDetailsComponent };
//# sourceMappingURL=user-details.component.js.map