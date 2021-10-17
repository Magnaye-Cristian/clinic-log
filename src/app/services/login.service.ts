import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: ILogin) {
    // let result;
    const response = this.http.post(`authenticate`, login, { observe: 'response', headers: { 'x-auth-token': '' } });
    response.subscribe(result => {
      if (result.status !== 200)
        return;
      const token = result.headers.get('x-auth-token')
      console.log(`token + ${token}`)
      localStorage.setItem('token', result.headers.get('x-auth-token'))
    })
    return response;
  }
}
