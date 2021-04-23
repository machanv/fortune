import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie';

type User = {
  name?: string,
  password?: string
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user: User = {};
  verificationCode: string = '';

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  refreshVerifiCode(): void {

  }

  login(): void {
// this.cookieService.put()
  }

}
