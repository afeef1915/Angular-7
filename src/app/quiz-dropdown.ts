// export class QuizDropdown {
// }
import { Quizbase } from './quizbase';

export class QuizDropdown  extends Quizbase<string> {

controlType = 'dropdown';

options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
