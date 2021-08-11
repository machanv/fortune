import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaneComponent} from './plane/plane.component';
import {SnakeComponent} from './snake/snake.component';


const ExportsImports = [
  PlaneComponent,
  SnakeComponent
];

@NgModule({
  declarations: [...ExportsImports],
  exports: [...ExportsImports],
  imports: [
    CommonModule
  ]
})
export class GamesCommonModule {
}
