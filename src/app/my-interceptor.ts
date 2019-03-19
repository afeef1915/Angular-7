import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        const updateRequest = req.clone({
            headers: req.headers.set('Authorization', 'afeef')
        });
        console.log('before making API Call', updateRequest);
        return next.handle(req).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                        console.log('api call  sucess:', event);
                    }
                },
                error => {
                    if (event instanceof HttpResponse) {
                        console.log(' api call error:', event);
                    }
                }
            )
        );
    }
    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     return next.handle(req);
    // }
}


