import { Injectable } from '@angular/core';
import { HttpClientHelperService } from './http-client-helper.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClientHelperService) { }
  getLogsNoTimeOut() {
    return this.http.get('logs/notimeout');
  }
}
