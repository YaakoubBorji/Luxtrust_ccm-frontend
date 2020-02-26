import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuardService } from './shared/services/guards/auth-guard.service';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatePositionComponent } from './create-position/create-position.component';
import { PositionFacadeComponent } from './position-facade/position-facade.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'createuser', component: CreateUserComponent },
    { path: 'createposition', component: CreatePositionComponent,canActivate: [AuthGuardService] },
    { path: 'positionFacade', component: PositionFacadeComponent,canActivate: [AuthGuardService] },
    {
        path: 'home',
        component: HomepageComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: "users",
        component: UserComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: "details/:id", component: UserDetailsComponent }
        ]
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '/home' }
];

export const appRoutingModule = RouterModule.forRoot(routes);