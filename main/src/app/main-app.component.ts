import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {NavBar} from './api/meta';
import {NavItem} from './api/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class MainAppComponent {
  title: string = 'Fortune';
  navList: NavItem[] = NavBar;

  constructor(private router: Router) {
  }

  onSelected(item: NavItem): void {
    this.navList.forEach(node => node.selected = false);
    item.selected = true;
  }

  gotoBackend(): void {
    this.router.navigate(['login']);
  }
}
