import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILogin } from '../models/login.model';
import { HttpClientHelperService } from './http-client-helper.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClientHelperService) { }

  login(login: ILogin) {
    const response = this.http.post('authenticate', login);
    response.subscribe((result: HttpResponse<Object>) => {
      if (result.status !== 200)
        return;
      const token = result.headers.get('x-auth-token')
      console.log(`token + ${token}`)
      localStorage.setItem('token', result.headers.get('x-auth-token'))
    })
    return response;
  }
}
