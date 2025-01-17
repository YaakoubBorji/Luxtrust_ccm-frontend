import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authentification/auth.service';



@Injectable()
export class BasicAuthInterceptorService implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authenticationService.getConnectedUser();
        console.log("--------------",currentUser);
        if (currentUser && currentUser.authData) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic ${currentUser.authData}`
                }
            });
        }

        return next.handle(request);
    }
}