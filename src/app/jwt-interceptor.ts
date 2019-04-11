import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './authentication.service';
import { Route } from '@angular/router';
import {Router} from '@angular/router';
import { ConstantPool } from '@angular/compiler';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService, private  router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        console.log('im at  JWT INTERCEPTOR');
        const currentUser = this.authenticationService.currentUserValue;
        console.log('jwt');        
        console.log(currentUser);
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        
        // return next.handle(req).catch(err => {
        //     console.log(err);
        //     if (err.status === 401) {
        //         if (err.error.message == "Token is exp") {
        //             //Genrate params for token refreshing
        //           const params = {
        //             token: currentUser.toke,
        //             refreshToken: localStorange("refreshToken"),
        //           };
        //           return this.http.post('localhost:8080/auth/refresh', params).flatMap(
        //             (data: any) => {
        //               //If reload successful update tokens
        //               if (data.status == 200) {
        //                 //Update tokens
        //                 localStorage.setItem("api-token", data.result.token);
        //                 localStorage.setItem("refreshToken", data.result.refreshToken);
        //                 //Clone our fieled request ant try to resend it
        //                 req = req.clone({
        //                   setHeaders: {
        //                     'api-token': data.result.token
        //                   }
        //                 });
        //                 return next.handle(req).catch(err => {
        //                   //Catch another error
        //                 });
        //               }else {
        //                 //Logout from account
        //                 console.log('loguty');
        //               }
        //             }
        //           );
        //         }else {
        //             //Logout from account or do some other stuff
        //         }
        //     }
        //     return Observable.throw(err);
        // });
        return next.handle(request);
    }
}