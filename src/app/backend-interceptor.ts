// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Observable, of, throwError } from 'rxjs';
// import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';


// @Injectable({ providedIn: 'root' })
// export class BackendInterceptor implements HttpInterceptor {
//     constructor() { }
//         private loginUrl = 'http://localhost/mtl_project/web/app_dev.php/api/login_check';
//     intercept(  req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//             // array in local storage for registered users
//         const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
//         // wrap in delayed observable to simulate server api call
//         return of(null).pipe(mergeMap(() => {

//             // authenticate
//             // if (req.url.endsWith('/users/authenticate') && req.method === 'POST') {
//             //     // find if any user matches login credentials
//             //     const filteredUsers = users.filter(user => {
//             //         return user.username === req.body.username && user.password === req.body.password;
//             //     });

//             //     if (filteredUsers.length) {
//             //         // if login details are valid return 200 OK with user details and fake jwt token
//             //         const user = filteredUsers[0];
//             //         const body = {
//             //             id: user.id,
//             //             username: user.username,
//             //             firstName: user.firstName,
//             //             lastName: user.lastName,
//             //             token: 'token'
//             //         };

//             //         return of(new HttpResponse({ status: 200, body: body }));
//             //     } else {
//             //         // else return 400 bad req
//             //         return throwError({ error: { message: 'Username or password is incorrect' } });
//             //     }
//             // }

//             // get users
           
//             if (req.url.endsWith('/login_check') && req.method === 'GET') {
//                 const use   = localStorage.getItem('currentUser');
//                 console.log('login check');
//                 // if (req.headers.get('Authorization') === use) {
//                 //     return of(new HttpResponse({ status: 200, body: users }));
//                 // } else {
//                 //     // return 401 not authorised if token is null or invalid
//                 //     return throwError({ status: 401, error: { message: 'Unauthorised' } });
//                 // }
//             }

//             // get user by id
//             // if (req.url.match(/\/users\/\d+$/) && req.method === 'GET') {
                
//             //     if (req.headers.get('Authorization') === 'Bearer fake-jwt-token') {
//             //         // find user by id in users array
//             //         const urlParts = req.url.split('/');
//             //         // tslint:disable-next-line:radix
//             //         const id = parseInt(urlParts[urlParts.length - 1]);
//             //         // tslint:disable-next-line:no-shadowed-variable
//             //         const matchedUsers = users.filter(user => user.id === id);
//             //         const user = matchedUsers.length ? matchedUsers[0] : null;

//             //         return of(new HttpResponse({ status: 200, body: user }));
//             //     } else {
//             //         // return 401 not authorised if token is null or invalid
//             //         return throwError({ status: 401, error: { message: 'Unauthorised' } });
//             //     }
//             // }

//             // register user
//             // if (req.url.endsWith('/users/register') && req.method === 'POST') {
//             //     // get new user object from post body
//             //     const newUser = req.body;

//             //     // validation
//             //     const duplicateUser = users.filter(user => user.username === newUser.username).length;
//             //     if (duplicateUser) {
//             //         return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
//             //     }

//             //     // save new user
//             //     newUser.id = users.length + 1;
//             //     users.push(newUser);
//             //     localStorage.setItem('users', JSON.stringify(users));

//             //     // respond 200 OK
//             //     return of(new HttpResponse({ status: 200 }));
//             // }

//         }))

//         .pipe(materialize())
//         .pipe(delay(500))
//         .pipe(dematerialize());
//     }
// }
