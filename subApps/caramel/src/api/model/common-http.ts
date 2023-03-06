import { HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";

export interface CommonHttpOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] },
  observe?: "body" | "events" | "response",
  params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean> },
  reportProgress?: boolean,
  responseType?: "arraybuffer" | "blob" | "json" | "text",
  withCredentials?: boolean
}

export interface CommonHttpResponse extends HttpResponse<any> {

}
