// import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit, ViewChild  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextboxComponent } from '../textbox/textbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { MerlinDatatbleServersideComponent } from '../merlin-datatble-serverside/merlin-datatble-serverside.component';
@Component({
  selector: 'app-dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css'],
  providers: [PersonService]
})

export class DynamicFormBuilderComponent implements OnInit  {
  // @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  form: FormGroup;
  persons: Person[];
  submitted = false;
  @Input() button: any;
  @ViewChild(MerlinDatatbleServersideComponent,{static: false}) component1: MerlinDatatbleServersideComponent;
  message: any;
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private router: Router, private personservice: PersonService) { }

  ngOnInit() {
    // const fieldsCtrls = {};
    // for (const f of this.fields) {
    //   fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
    // }
    // this.form = new FormGroup(fieldsCtrls);
   

    const fieldsCtrls = {};
    for (const f of this.fields) {
      if (f.type !== 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
      } else {
        const opts = {};
        for (const opt of f.options) {
          opts[opt.key] = new FormControl(opt.value);
        }
        fieldsCtrls[f.name] = new FormGroup(opts);
      }
    }
    this.form = new FormGroup(fieldsCtrls);
  }

  // ngAfterViewInit() {
  //   // this.message = this.child.filterById();
  //   console.log('im here-=========');
  //   // console.log(this.message);
  //  // onSubmit( ) {
  //     this.component1.filterById(event);
  //      console.log('submit search function');
  //      // this.submitted = true;
  //      console.log(this.form.value);
  //  // }
  // }


  // onSubmit() {
  //   this.submitted = true;
  //   console.log(this.form.value);
  //   // stop here if form is invalid
  //   if (this.form.invalid) {
  //     return;
  //   } else {
  //     if (!this.form.value) { return; }
  //     this.personservice.addPerson(this.form.value)
  //       .subscribe(per => {
  //         this.persons.push(per);

  //       });
  //     alert('Saved Data');
  //     this.router.navigate(['/person/list']);
  //   }
  // }
  
  onSubmit(event: any ) {
    // console.log('submit search function');
    // console.log(event);
    this.messageEvent.emit(this.form.value);
     //this.component1.filterById(this.form.value);   
  }

  
  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.profileForm.invalid) {
  //     return;
  //   } else {
  //     if (!this.profileForm.value) { return; }
  //     this.personservice.addPerson(this.profileForm.value)
  //       .subscribe(per => {
  //         this.persons.push(per);

  //       });
  //     alert('Saved Data');
  //     this.router.navigate(['/person/list']);
  //   }
  // }


}
