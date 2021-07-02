import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from '../../../api';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-item',
  templateUrl: './dynamic-item.component.html',
  styleUrls: ['./dynamic-item.component.less']
})
export class DynamicItemComponent implements OnInit {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}
