import { Injectable } from '@angular/core';
import { LogCreateDTO } from '../models/log-create-dto.model';
import { ILog } from '../models/log.model';
import { HttpClientHelperService } from './http-client-helper.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  delete(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClientHelperService) { }
  getLogsNoTimeOut() {
    return this.http.get('logs/notimeout');
  }
  create(log: LogCreateDTO) {
    return this.http.post('logs/', log);
  }
}
