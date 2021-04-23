import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  login() {
// this.cookieService.put()
  }

}
