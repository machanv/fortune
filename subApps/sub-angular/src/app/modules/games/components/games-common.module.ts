import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaneComponent} from './plane/plane.component';
import {SnakeComponent} from './snake/snake.component';


const ExportsImportsEntryComponents = [
  PlaneComponent,
  SnakeComponent
];

@NgModule({
  declarations: [...ExportsImportsEntryComponents],
  exports: [...ExportsImportsEntryComponents],
  imports: [
    CommonModule
  ]
})
export class GamesCommonModule {
}
