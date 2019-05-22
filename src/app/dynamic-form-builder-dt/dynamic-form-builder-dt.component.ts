import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextboxComponent } from '../textbox/textbox.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';
@Component({
  selector: 'app-dynamic-form-builder-dt',
  templateUrl: './dynamic-form-builder-dt.component.html',
  styleUrls: ['./dynamic-form-builder-dt.component.css'],
  providers: [PersonService]
})
export class DynamicFormBuilderDtComponent implements OnInit {
  @Input() fields: any[] = [];
  form: FormGroup;
  persons: Person[];
  constructor(private router: Router, private personService: PersonService) { }

  ngOnInit() {
    // const fieldsCtrls = {};
    // for (const f of this.fields) {
    //   if (f.type !== 'checkbox') {
    //     fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required);
    //   } else {
    //     const opts = {};
    //     for (const opt of f.options) {
    //       opts[opt.key] = new FormControl(opt.value);
    //     }
    //     fieldsCtrls[f.name] = new FormGroup(opts);
    //   }
    // }
    // this.form = new FormGroup(fieldsCtrls);
    const fieldsCtrls = {};

    for (const f of this.fields) {
      if (f.type !== 'checkbox') {
        fieldsCtrls[f.name] = new FormControl(f.value || '');
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
  
}
