import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICode } from '../models/code.model';
import { HttpClientHelperService } from './http-client-helper.service';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  codeList: Subject<any> = new Subject();
  constructor(private http: HttpClientHelperService) { }
  getAllCodes() {
    return this.http.get('accounts/codes')
  }
}
