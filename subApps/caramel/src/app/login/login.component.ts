import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /**
   * Creates an instance of LoginComponent.
   * @memberof LoginComponent
   * use Reactive forms
   */
  loginControl = new FormControl('');
  constructor() {}

  ngOnInit(): void {}
}
