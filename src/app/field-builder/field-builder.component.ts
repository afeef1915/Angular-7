// import { Component, OnInit } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.css']
})
export class FieldBuilderComponent implements OnInit {
  @Input() field: any;
  @Input() form: any;
  
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  constructor() { }

  ngOnInit() {
  }

}
