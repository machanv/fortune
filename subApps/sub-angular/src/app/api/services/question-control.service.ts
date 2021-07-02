import {Injectable} from '@angular/core';
import {QuestionBase, TextBoxQuestion, DropdownQuestion} from '../models';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() {
  }

  toFormGroup(questions: QuestionBase<string>[]): FormGroup {
    const group: any = {};
    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value);
    });
    return new FormGroup(group);
  }

  getQuestions(): Observable<QuestionBase<any>[]> {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid', value: 'Solid'},
          {key: 'great', value: 'Great'},
          {key: 'good', value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new TextBoxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new TextBoxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
