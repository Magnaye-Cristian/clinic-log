import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientHelperService {

  options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }) };

  constructor(private http: HttpClient) { }

  post<T>(url: string, body: any) {
    /**
     * this is created to avoid creation of options in every request
     */
    return this.http.post<T>(url, body, this.options);
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(url, body, this.options);
  }

  get<T>(url: string) {
    return this.http.get<T>(url, this.options);
  }
}
