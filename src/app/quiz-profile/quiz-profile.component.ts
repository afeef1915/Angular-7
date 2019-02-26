import { Component, OnInit, Input } from '@angular/core';
import {QuizComponent} from '../quiz.component';

@Component({
  selector: 'app-quiz-profile',
  templateUrl: './quiz-profile.component.html',
  styleUrls: ['./quiz-profile.component.css']
})
export class QuizProfileComponent implements QuizComponent {
  @Input() data: any;

  // constructor() { }

  // ngOnInit() {
  // }

}
