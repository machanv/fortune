import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export const USER_TONEKN = 'user-token';
@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }
}
