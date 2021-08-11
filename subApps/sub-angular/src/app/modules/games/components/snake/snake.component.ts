import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Snake, SnakeItem} from '../../../../api';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.less']
})
export class SnakeComponent implements OnInit, AfterViewInit {
  // 贪吃蛇

  snakeObj = new Snake({id: 0, name: '', length: 5});

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    const canvas = this.elementRef.nativeElement.querySelector('#canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    context.fillStyle = '#dddddd';
    context.fillRect(0, 0, 50, 60);
  }

  snake(): Snake<any> {

    return this.snakeObj;
  }

}
