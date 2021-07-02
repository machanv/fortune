import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {UserCenterComponent} from './user-center.component';
import {MainCommonModule} from '../../../components/main-common.module';


const routes = [
  {path: '', component: UserCenterComponent}
];

@NgModule({
  declarations: [
    UserCenterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MainCommonModule,
    ReactiveFormsModule,
  ]
})
export class UserCenterModule {
}
