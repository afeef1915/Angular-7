import { Component, OnInit,Input } from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from '../question-base';
import { QuestionControlService }    from '../question-control.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers:  [QuestionControlService]
})
export class QuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>[] = [];
  @Input() form: FormGroup;
  payLoad = '';
  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.question);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
