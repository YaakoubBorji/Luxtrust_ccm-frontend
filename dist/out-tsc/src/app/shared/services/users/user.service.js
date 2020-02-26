var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserByLoginPassword = function (credential) {
        return this.http.post("http://localhost:9090/authenticate", credential);
    };
    UserService.prototype.existLogin = function (login) {
        return null;
    };
    UserService.prototype.getAll = function () {
        return this.http.get("http://localhost:9090/", { headers: { 'Authorization': 'Basic ' + this.getConnectedUser().authData } });
    };
    UserService.prototype.getConnectedUser = function () {
        //And to retrieve data from localstorage
        var user = JSON.parse(sessionStorage.getItem("connectedUser"));
        return user;
    };
    UserService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map