import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';

const routes = [{path: '', component: LoginComponent}];
const declarationsExports = [LoginComponent];

@NgModule({
  declarations: [...declarationsExports],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    FormsModule],
})
export class BackendModule {
}
