import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderComponent} from './components/slider/slider.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: SliderComponent}
];

@NgModule({
  declarations: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SliderModule {
}
