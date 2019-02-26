import { QuestionBase } from './question-base';
import {Injectable} from '@angular/core';

@Injectable()
export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
