
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-field-builder-dt',
  templateUrl: './field-builder-dt.component.html',
  styleUrls: ['./field-builder-dt.component.css']
})
export class FieldBuilderDtComponent implements OnInit {
  @Input() field: any;
  @Input() form: any;
  constructor() { }

  ngOnInit() {
  }

}
