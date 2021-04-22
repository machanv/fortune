import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class MainAppComponent {
  title: string = 'Fortune';

  constructor(private router: Router) {
  }
}
