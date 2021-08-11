import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.less']
})
export class VoiceComponent implements OnInit {
  // 音频
  src: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
