import { FiltrePipe } from './shared/pipe/Filtre.pipe';
import { AuthService } from './shared/services/authentification/auth.service';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { UserComponent } from "./user/user.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './shared/services/users/user.service';
import { filter } from 'minimatch';
import { ErrorInterceptor } from './shared/helpers/error-interceptor.service';
import { BasicAuthInterceptorService } from './shared/helpers/basic-auth-interceptor.service';
import { appRoutingModule } from './app.routing';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { CreatePositionComponent } from './create-position/create-position.component';
import { PositionFacadeComponent } from './position-facade/position-facade.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserComponent,
    UserDetailsComponent,
    LoginComponent,
    CreateUserComponent,
    FiltrePipe,
    MenuNavComponent,
    CreatePositionComponent,
    PositionFacadeComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule, HttpClientModule, FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptorService, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, UserService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
