import { Component } from '@angular/core';
import { Router } from '@angular/router';

type NavItem = {
  name: string;
  link: string;
  icon: string;
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
      icon:'iconindex'
    },
    {
      name: 'react',
      link: 'react',
      icon:''
    },
    {
      name: 'vue',
      link: 'vue',
      icon:''
    },
    {
      name: 'angular',
      link: 'angular',
      icon:''
    },
  ];
  constructor(private _router: Router) {}

  gotoBackend() {
    this._router.navigate(['backend']);
  }
}
