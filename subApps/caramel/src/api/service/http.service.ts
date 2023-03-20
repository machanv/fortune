import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { CommonHttpOptions, CommonHttpResponse } from "../model/common-http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  apiUrl = environment.server;

  constructor(private httpClient: HttpClient) {
  }

  get(url: string, options: CommonHttpOptions): Observable<CommonHttpResponse> {
    return this.httpClient.get<CommonHttpResponse>(this.apiUrl + url)
      .pipe(catchError(this.handleError));
  }

  post(url: string, options: CommonHttpOptions): Observable<CommonHttpResponse> {
    return this.httpClient.post<CommonHttpResponse>(this.apiUrl + url, options)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error("An error occurred:", error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError(() => new Error(""));
  }
}
