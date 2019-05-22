import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox-dt',
  templateUrl: './textbox-dt.component.html',
  styleUrls: ['./textbox-dt.component.css']
})
export class TextboxDtComponent implements OnInit {
  //   @Input() field: any = {};
  //   @Input() form: FormGroup;

  // get isValid() { return this.form.controls[this.field.name].valid; }
  // get isDirty() { return this.form.controls[this.field.name].dirty; }
  @Input() field: any = {};
  @Input() form: FormGroup;

  //  get isValid() { return  this.form.controls[this.field.name].valid; }
  //  get isDirty() { return  this.form.controls.this.field.name].}
  constructor() { }

  ngOnInit() {
  }

}
