import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GamesComponent} from './games.component';
import {RouterModule} from '@angular/router';
import {GamesCommonModule} from './components/games-common.module';

const routes = [
  {
    path: '', children: [
      {path: '', component: GamesComponent}
    ]
  }
];

@NgModule({
  declarations: [
    GamesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GamesCommonModule
  ]
})
export class GamesModule {
}
