import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {CommonResponse} from '../models';
import {map} from 'rxjs/operators';

@Injectable()
export class HttpService {
  serverUrl = 'http://localhost:3000';

  requestOptions = {};

  constructor(private httpClient: HttpClient) {
  }

  get(requestUrl: string, params?: any): Observable<any> {
    let url = requestUrl;
    if (params) {
      for (const paramsKey of Object.keys(params)) {
        url += `${paramsKey} = ${params[paramsKey]}`;
      }
    }
    return this.httpClient.get(`${this.serverUrl}${url}`, this.requestOptions);
  }

  handelError(): Observable<any> {
    return of();
  }

}
