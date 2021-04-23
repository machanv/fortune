import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NavBar, NavItem} from '../../../api';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  title: string = 'Fortune';
  navList: NavItem[] = NavBar;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
