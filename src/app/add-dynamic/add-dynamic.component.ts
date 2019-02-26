import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';

import { FormBuilder } from '@angular/forms';

import { FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { TextboxComponent } from '../textbox/textbox.component';


@Component({
  selector: 'app-add-dynamic',
  templateUrl: './add-dynamic.component.html',
  styleUrls: ['./add-dynamic.component.css'],
  providers: [PersonService]
})
export class AddDynamicComponent implements OnInit {
  //fields: Person[];
  public form: FormGroup;
  unsubcribe: any;
  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'date',
      name: 'dateOfBirth',
      label: 'Date of Birth',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'gender',
      label: 'Gender',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }

  ];

  constructor(private router: Router, private location: Location, private personservice: PersonService, private fb: FormBuilder) {
    console.log(this.fields);

    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });
    // this.unsubcribe = this.form.valueChanges.subscribe((update) => {
    //   console.log(update);
    //   this.fields = JSON.parse(update.fields);

    //   console.log(this.fields);
    // });
  }

  ngOnInit() {
    //this.getPersonMetaData();
  }



  // getPersonMetaData(): void {
  //   this.personservice.getDynamicData()
  //     .subscribe(fields => this.fields = fields);

  //   this.form = new FormGroup({
  //     fields: new FormControl(JSON.stringify(this.fields))
  //   });
  //   this.unsubcribe = this.form.valueChanges.subscribe((update) => {
  //     console.log(update);
  //     this.fields = JSON.parse(update.fields);
  //   });
  // }

  getFields() {
    return this.fields;
  }

  // ngDistroy() {
  //   this.unsubcribe();
  // }


}
