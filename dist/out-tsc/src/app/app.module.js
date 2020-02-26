var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FiltrePipe } from './shared/pipe/Filtre.pipe';
import { AuthService } from './shared/services/authentification/auth.service';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { UserComponent } from "./user/user.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './shared/services/users/user.service';
var APP_ROUTE = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    {
        path: "home",
        component: HomepageComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "users",
        component: UserComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: "details/:id/:mustapha", component: UserDetailsComponent }
        ]
    },
    { path: "users/:id/:mustapha", component: UserDetailsComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomepageComponent,
                UserComponent,
                UserDetailsComponent,
                LoginComponent,
                CreateUserComponent,
                FiltrePipe
            ],
            imports: [
                BrowserModule,
                RouterModule.forRoot(APP_ROUTE),
                ReactiveFormsModule, HttpClientModule, FormsModule
            ],
            providers: [UserService, AuthGuardService, AuthService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map