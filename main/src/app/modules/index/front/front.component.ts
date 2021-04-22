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

  ngOnInit(): void {
    this.navList = NavBar;
  }

  onSelected(item: NavItem): void {
    this.navList.forEach(node => node.selected = false);
    item.selected = true;
  }

  gotoBackend(): void {
    this.router.navigate(['login']);
  }
}
