import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase, QuestionControlService} from '../../../api';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.less']
})
export class UserCenterComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(private qcs: QuestionControlService) {
    this.questions$ = qcs.getQuestions();
  }

  ngOnInit(): void {
  }
}
