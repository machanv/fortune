import {Component, Input, OnInit} from '@angular/core';
import {HttpService, QuestionBase, QuestionControlService} from '../../../api';

import {Observable} from 'rxjs';
import {UserBase} from '../../../api/models/user-base';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.less']
})
export class UserCenterComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;

  userList: UserBase[] = [];

  constructor(private qcs: QuestionControlService,
              private httpService: HttpService) {
    this.questions$ = qcs.getQuestions();
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.httpService.get('/users', {}).subscribe(res => {
      if (res && res.data) {
        this.userList = [...res.data];
      }
    });
  }
}
