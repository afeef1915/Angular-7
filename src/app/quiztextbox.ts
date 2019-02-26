import { Quizbase } from './quizbase';

export class Quiztextbox  extends Quizbase<string> {

controlType = 'textbox';
type: string;

 constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

