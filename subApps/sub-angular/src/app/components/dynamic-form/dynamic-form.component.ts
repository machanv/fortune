import {Component, Input, OnInit} from '@angular/core';
import {HttpService, QuestionBase, QuestionControlService} from '../../api';
import {FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {

  }

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);

  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
