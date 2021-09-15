import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit, AfterViewInit {

  imagesList = [
    {src: 'assets/images/1.jfif', title: 'aaaa1'},
    {src: 'assets/images/2.jfif', title: 'aaaa2'},
    {src: 'assets/images/3.jfif', title: 'aaa3a'},
    {src: 'assets/images/4.jpg', title: 'aaa4a'},
    {src: 'assets/images/5.jfif', title: 'aa5aa'},
  ];

  currentIndex: any = 0;
  listContainer: any;
  imageDomList: any;

  interval: any = 5000;

  ratio = 0.95;

  timeIntervalSub: Subscription | undefined;

  constructor(private elementRef: ElementRef,
              private renderer2: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.listContainer = this.elementRef.nativeElement.querySelector('#listContainer');
    this.imageDomList = this.listContainer.children;
    this.formatStyle();
    this.timeIntervalSub = interval(this.interval).subscribe(() => {
      this.currentIndex++;
      if (this.currentIndex > this.imageDomList.length - 1) {
        this.currentIndex = 0;
      }
      this.formatStyle();
    });
  }

  toggleIndex(i: any): void {
    this.currentIndex = i;
    this.formatStyle();
  }

  formatStyle(): void {
    this.clearStyles();
    const len = this.imageDomList && this.imageDomList.length;

    let left = 0;
    let right = 0;
    let scale;
    let width;
    let zIndex;
    if (this.currentIndex === 0) {
      width = 0.75, zIndex = len, scale = 1;
      this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'width', `75%`);
      this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'height', `75%`);
      this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'zIndex', 99);
      this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'left', 0);
      for (let i = 1; i < len; i++) {
        scale *= this.ratio;
        width = width * scale;
        right = 0.25 / (len - 1) * (len - 1 - i);
        zIndex--;
        this.renderer2.setStyle(this.imageDomList[i], 'right', `${right * 100}%`);
        this.renderer2.setStyle(this.imageDomList[i], 'width', `${width * 100}%`);
        this.renderer2.setStyle(this.imageDomList[i], 'height', `${width * 100}%`);
        this.renderer2.setStyle(this.imageDomList[i], 'zIndex', zIndex);
      }
    } else if (this.currentIndex === len - 1) {
      width = 0.75, zIndex = len, scale = 1;
      this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'width', `75%`);
      this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'height', `75%`);
      this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'zIndex', 99);
      this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'right', 0);
      for (let i = len - 2; i >= 0; i--) {
        scale *= this.ratio;
        width = width * scale;
        left = 0.25 / (len - 1) * i;
        zIndex--;
        this.renderer2.setStyle(this.imageDomList[i], 'left', `${left * 100}%`);
        this.renderer2.setStyle(this.imageDomList[i], 'width', `${width * 100}%`);
        this.renderer2.setStyle(this.imageDomList[i], 'height', `${width * 100}%`);
        this.renderer2.setStyle(this.imageDomList[i], 'zIndex', zIndex);
      }
    } else {
      width = 0.75, zIndex = 0, scale = 1;
      left = 0;
      right = 0;
      const pre = this.currentIndex;
      const last = len - this.currentIndex;
      const perSplit = 0.25 / (len - 1);
      scale = this.ratio * Math.pow(this.ratio, pre);
      width = 0.75 * Math.pow(this.ratio, pre + 1);
      for (let i = 0; i < len; i++) {
        if (i < this.currentIndex) {
          scale /= this.ratio;
          width = 0.75 * scale;
          zIndex++;
          this.renderer2.setStyle(this.imageDomList[i], 'width', `${width * 100}%`);
          this.renderer2.setStyle(this.imageDomList[i], 'height', `${width * 100}%`);
          this.renderer2.setStyle(this.imageDomList[i], 'left', `${left * 100}%`);
          this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'zIndex', zIndex);
          left += perSplit;
        } else if (i > this.currentIndex) {
          right -= perSplit;
          scale *= this.ratio;
          width = 0.75 * scale;
          zIndex--;
          this.renderer2.setStyle(this.imageDomList[i], 'width', `${width * 100}%`);
          this.renderer2.setStyle(this.imageDomList[i], 'height', `${width * 100}%`);
          this.renderer2.setStyle(this.imageDomList[i], 'right', `${(right * 100)}%`);
          this.renderer2.setStyle(this.imageDomList[i], 'zIndex', zIndex);
        } else {
          left = this.currentIndex * perSplit;
          this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'width', `75%`);
          this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'height', `75%`);
          this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'zIndex', 99);
          this.renderer2.setStyle(this.imageDomList[this.currentIndex], 'left', `${left * 100}%`);
          right = perSplit * (last - 1);
          scale = 1;
          width = 0.75;
          zIndex = len;
        }
      }
    }
  }

  clearStyles(): void {
    for (const item of this.imageDomList) {
      this.renderer2.removeStyle(item, 'width');
      this.renderer2.removeStyle(item, 'height');
      this.renderer2.removeStyle(item, 'left');
      this.renderer2.removeStyle(item, 'right');
      this.renderer2.removeStyle(item, 'zIndex');
    }
  }

}
