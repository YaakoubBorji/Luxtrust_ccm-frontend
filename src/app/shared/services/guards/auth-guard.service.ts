import { AuthService } from '../authentification/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    if (!this.authService.isConnected()) this.router.navigate(["/"]);
    return this.authService.isConnected();
  }
}
