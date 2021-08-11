import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video/video.component';

const ExportsImportsEntryComponents = [VideoComponent];

@NgModule({
  declarations: [...ExportsImportsEntryComponents],
  exports: [...ExportsImportsEntryComponents],
  imports: [
    CommonModule
  ]
})
export class MediaCommonModule {
}
