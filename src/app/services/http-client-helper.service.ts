import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientHelperService {

  constructor(private http: HttpClient) { }
  post<T>(url: string, body: any) {
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }) };
    return this.http.post<T>(url, body, options);
  }
}
