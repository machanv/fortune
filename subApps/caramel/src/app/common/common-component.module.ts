import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "./loading/loading.component";
import { ProgressComponent } from './progress/progress.component';

const components = [
  LoadingComponent
];

@NgModule({
  declarations: [
    ...components,
    ProgressComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonComponentModule {
}
