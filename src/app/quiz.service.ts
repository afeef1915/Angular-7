import { Injectable } from '@angular/core';
import { Quizbase } from './quizbase';
import { Quiztextbox } from './quiztextbox';
import { QuizDropdown } from './quiz-dropdown';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizProfileComponent } from './quiz-profile/quiz-profile.component';
import { QuizAdComponent } from './quiz-ad/quiz-ad.component';
import { AddQuiz } from './add-quiz';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class QuizService {

  constructor() { }

  getQuizResults() {

    const quiz: Quizbase<any>[] = [

      new Quiztextbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new QuizDropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      })
    ];

    return quiz.sort((a, b) => a.order - b.order);
  }

  toFormGroup(quizes: Quizbase<any>[]) {
    const group: any = {};

    quizes.forEach(quize => {
      group[quize.key] = quize.required ? new FormControl(quize.value || '', Validators.required)
        : new FormControl(quize.value || '');
    });
    return new FormGroup(group);
  }
  getAllQuiz() {
    return [
      new AddQuiz(QuizProfileComponent, { name: 'Bombasto', bio: 'Brave as they come' }),

      new AddQuiz(QuizProfileComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),

      new AddQuiz(QuizAdComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!'
      }),

      new AddQuiz(QuizAdComponent, {
        headline: 'Openings in all departments',
        body: 'Apply today'
      }),

    ];
  }

}
