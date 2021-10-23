import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


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
    return this.http.post<T>(url, body, this.options).pipe(
      map((res: any) => {
        if (url === 'authenticate')
          this.saveToken(res);
        return res.body;
      })
    );;
  }
  private saveToken(result: any) {
    if (result.status !== 200)
      return;
    const token = result.headers.get('x-auth-token')
    console.log(`token + ${token}`)
    localStorage.setItem('token', result.headers.get('x-auth-token'))
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(url, body, this.options);
  }

  get<T>(url: string, options = null) {
    const _options = options ? options : this.options
    return this.http.get<T>(url, _options).pipe(
      map((res: any) => { return res.body; console.log(res) })
    );
  }
  private extractData(res: Response) {
    let body = res.text();  // If response is a JSON use json()
    if (body) {
      return body;
    } else {
      return {};
    }
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
