import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuestionControlService} from './question-control.service';
import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';

const providers = [
  QuestionControlService,
  HttpService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [...providers]
})
export class ServiceModule {
}
