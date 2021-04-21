import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from '../../components/login/login.component';

const routes = [{path: '', component: LoginComponent}];
const declarationsExports = [LoginComponent];

@NgModule({
  declarations: [...declarationsExports],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BackendModule {
}
