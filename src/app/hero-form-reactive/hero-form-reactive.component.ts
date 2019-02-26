import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import{forbiddenNameValidator} from '..'
import { MustMatch } from '../helpers/must-match.validator';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {

  // powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  // hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
  // heroForm: FormGroup;
  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            lastName: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('form Values' + JSON.stringify(this.registerForm.value))
    }
//   registerForum: FormGroup;
//   submitted=false;

//   constructor(private formBuilder:FormBuilder) { }


//   ngOnInit() {

//     this.registerForum=this.formBuilder.group({
//         firstName:['',Validators.required],
//         lastName:['',Validators.required],
//         email:['',Validators.required,Validators.email],
//         password:['',Validators.required,Validators.minLength(6)],
//         confirmPassword:['',Validators.required]
//     },
//   {
//     validator:MustMatch('password','confirmPassword')
  
//   });
// }
// get f(){ return this.registerForum }

// onSubmit()
// {
//   this.submitted=true;
//   if(this.registerForum.invalid)
//   {

//   }
// }
//     // this.heroForm = new FormGroup({
//     //   'name1': new FormControl(this.heroForm.name, [
//     //     Validators.required,
//     //     Validators.minLength(4),
//     //     forbiddenNameValidator(/bob/i)  //<-- custom validators.

//     //   ]),
//     //   'name1':new FormControl(this.hero.name1),
//     //   'name2':new FormControl(this.hero.name2,Validators.required)
       
    
//     // });
//     // this.heroForm=new FormGroup({
//     //   'name':new FormControl(this.hero.name,[
//     //     Validators.required,
//     //     Validators.minLength(4),
//     //     forbiddenNameValidator('')
//     //   ]
//     // }),
//   }

  // get name(){ return this.heroForm.get('name'); }

  // get name3(){ return this.heroForm.get('name3'); }

}
