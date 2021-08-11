import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoComponent} from './video/video.component';
import {VoiceComponent} from './voice/voice.component';

const ExportsImports = [
  VideoComponent,
  VoiceComponent
];

@NgModule({
  declarations: [...ExportsImports],
  exports: [...ExportsImports],
  imports: [
    CommonModule
  ]
})
export class MediaCommonModule {
}
