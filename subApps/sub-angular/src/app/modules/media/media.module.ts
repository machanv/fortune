import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MediaComponent} from './media.component';
import {RouterModule} from '@angular/router';
import {MediaCommonModule} from './components/media-common.module';


const routes = [
  {
    path: '',
    children: [
      {path: '', component: MediaComponent}
    ]
  }
];

@NgModule({
  declarations: [
    MediaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MediaCommonModule
  ]
})

export class MediaModule {
}
