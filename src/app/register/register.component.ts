import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../alert.service';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { UserRegistrationService } from '../user-registration.service';
import { Userdetails } from '../userdetails';
import { MustMatch } from '../must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService,
    private userRegistrationService: UserRegistrationService,

  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   username: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(6)]]
    // });

    this.registerForm = this.formBuilder.group({
      email: ['',  [ Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)] ],
      repeatpassword: ['', Validators.required]
    },  {
      validator: MustMatch('password', 'repeatpassword')
  });

  }

  get f() { return this.registerForm.controls; }

  // checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  //   const pass = group.controls.password.value;
  //   const confirmPass = group.controls.repeatpassword.value;

  //   return pass === confirmPass ? null : { notSame: true };
  // }

  register() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    
    this.loading = true;
    this.userRegistrationService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}

