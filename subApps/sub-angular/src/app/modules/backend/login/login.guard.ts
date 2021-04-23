import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CookieService} from 'ngx-cookie';
import {USER_TONEKN} from '../../../api/service/http-service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  token: string = '';

  constructor(private cookieService: CookieService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.token = this.cookieService.get(USER_TONEKN);
    return true;
    if (!this.token) {
      this.router.navigate(['login']);
      return of(false);
    } else {
      return of(true);
    }
  }
}
