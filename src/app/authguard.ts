import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService } from './authentication.service';

// import { AlertService } from  './alert.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router) {}
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

     
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
           if (!localStorage.getItem('currentUser')) {
               this.router.navigate(['/login']);
           }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
