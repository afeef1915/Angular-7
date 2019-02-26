import { Component, OnInit, Input } from '@angular/core';
import {Quiz} from '../quiz';
import {QuizComponent} from '../quiz.component';
@Component({
  selector: 'app-quiz-ad',
  templateUrl: './quiz-ad.component.html',
  styleUrls: ['./quiz-ad.component.css']
})
export class QuizAdComponent implements QuizComponent {
  @Input() data: any;

  constructor() { }

  // ngOnInit() {
  // }

}
