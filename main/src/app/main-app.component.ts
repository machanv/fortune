import {Component, OnInit} from '@angular/core';
import {NavBar, NavItem} from './api/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class MainAppComponent implements OnInit {
  title: string = 'Fortune';
  navList: NavItem[] = NavBar;

  constructor() {
  }

  ngOnInit(): void {
    const url = location.pathname.split('/');
    this.navList.forEach(nav => {
      if (nav.link === url[1]) {
        nav.selected = true;
      }
    });
  }

  onSelected(item: NavItem): void {
    this.navList.forEach(node => node.selected = false);
    item.selected = true;
  }
}
