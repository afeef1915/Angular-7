import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../alert.service';
import { AuthenticationService } from '../authentication.service';
import { UserRegistrationService } from '../user-registration.service';
import { Userdetails } from '../userdetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userRegistrationService: UserRegistrationService,
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
 

  get f() { return this.loginForm.controls; }

  // onSubmit()  {
  //   this.submitted  = true;
  //     //stop if form is invalid

  //     if  ( this.loginForm.invalid) {
  //         return;
  //     }

  //     this.loading = true;
  //    // this.authenticationService.login(this.f.username.value, this.f.password.value)
  //     this.userRegistrationService.login(this.loginForm.value)
  //     .pipe( first())
  //     .subscribe(
  //         data => {
  //           console.log(this.returnUrl);
  //           //this.router.navigate(['/dashboard']);
  //               this.router.navigate([this.returnUrl]);
  //         },
  //         error => {
  //               this.alertService.error(error);
  //               this.loading = false;
  //         }
  //     );
  // }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          // this.alertService.success(this.success_message);
          this.loading = true;
           this.alertService.success('User successfully Login');
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('error in login-->');
          console.log(error);
  
          this.alertService.error(error);
          this.loading = false;
        }
        );

  }
}
