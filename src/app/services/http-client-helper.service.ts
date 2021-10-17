import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpClientHelperService {

  constructor(private http: HttpClient) { }
  post<T>(url: string, body: any) {
    /**
     * this is created to avoid creation of options in every request
     */
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }) };
    return this.http.post<T>(url, body, options);
  }

  put<T>(url: string, body: any) {
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }) };
    return this.http.put<T>(url, body, options);
  }
}
