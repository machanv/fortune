import { Component } from '@angular/core';
import { Router } from '@angular/router';

type NavItem = {
  name: string;
  link: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Fortune';
  navList: NavItem[] = [
    {
      name: '首页',
      link: '/',
    },
    {
      name: 'react',
      link: 'react',
    },
    {
      name: 'vue',
      link: 'vue',
    },
    {
      name: 'angular',
      link: 'angular',
    },
  ];
  constructor(private _router: Router) {}

  gotoBackend() {
    this._router.navigate(['backend']);
  }
}
