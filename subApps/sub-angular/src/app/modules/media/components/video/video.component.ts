import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {
  // 视频
  src: string = '';
  controls: boolean = true;

  // @ViewChild('videoElement') videoElement: ElementRef;

  constructor(private renderer2: Renderer2) {
  }

  ngOnInit(): void {
    // console.log(this.videoElement);
  }

}
