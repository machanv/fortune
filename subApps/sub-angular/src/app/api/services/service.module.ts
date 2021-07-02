import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionControlService} from './question-control.service';

const providers = [
  QuestionControlService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [...providers]
})
export class ServiceModule {
}
