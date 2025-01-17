var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserService } from "./../shared/services/users/user.service";
import { User } from "./../shared/services/models/user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
var UserComponent = /** @class */ (function () {
    function UserComponent(router, activatedRoute, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (allUsers) {
            _this.users = allUsers;
        });
    };
    UserComponent.prototype.redi = function (id) {
        this.router.navigate(["/users/details", id]);
    };
    UserComponent.prototype.filtrer = function (event) {
        console.log(event.target.value);
    };
    UserComponent.prototype.addUser = function () {
        var user = new User(new Date().getTime(), "nom" + new Date().getTime(), "prenom" + new Date().getTime(), "prenom" + new Date().getTime(), "fdsdqfds@fdfd.fdf" + new Date().getTime(), "" + new Date().getTime());
        this.users.push(user);
    };
    UserComponent = __decorate([
        Component({
            selector: "app-user",
            templateUrl: "./user.component.html",
            styleUrls: ["./user.component.css"]
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            UserService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map