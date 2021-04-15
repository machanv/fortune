import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NavBar } from './api/meta';
import { NavItem } from './api/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Fortune';
  navList: NavItem[] = NavBar;
  constructor(private _router: Router) {}

  onSelected(item: NavItem) {
    this.navList.forEach(node => node.selected === false);
    item.selected = true;
  }

  gotoBackend() {
    this._router.navigate(['backend']);
  }
}
