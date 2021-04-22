import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FrontComponent} from './front/front.component';

const routes = [
  {path: '', component: FrontComponent}
];

const declarationsEntryComponents = [FrontComponent];

@NgModule({
  declarations: [...declarationsEntryComponents],
  entryComponents: [...declarationsEntryComponents],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IndexModule {
}
