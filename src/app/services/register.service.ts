import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../models/register.models';
import { HttpClientHelperService } from './http-client-helper.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClientHelperService) { }

  register(register: IRegister) {
    //create register dto
    return this.http.post('register', register)
  }
}
