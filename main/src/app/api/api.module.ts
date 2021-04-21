import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpService} from './service/http-service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [],
  providers: [HttpService]
})
export class ApiModule {
}
