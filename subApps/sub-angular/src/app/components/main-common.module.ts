import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {ServiceModule} from '../api/services/service.module';
import {DynamicItemComponent} from './dynamic-form/dynamic-item/dynamic-item.component';

const declarationsEntryComponentsExports = [
  DynamicFormComponent
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ServiceModule],
  declarations: [
    DynamicFormComponent,
    DynamicItemComponent
  ],
  entryComponents: [...declarationsEntryComponentsExports],
  exports: [...declarationsEntryComponentsExports]
})
export class MainCommonModule {
}
