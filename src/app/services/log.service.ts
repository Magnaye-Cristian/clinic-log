import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogCreateDTO } from '../models/log-create-dto.model';
import { ILogUpdateDTO } from '../models/log-update-dto.model';
import { ILog } from '../models/log.model';
import { HttpClientHelperService } from './http-client-helper.service';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logsUrl = 'logs'
  constructor(private http: HttpClientHelperService) { }

  update(log: ILogUpdateDTO) {
    // console.log(`update log`)
    // console.log(log)
    return this.http.put(`${this.logsUrl}`, log);
  }
  updateMedicine(medInfo: { id: number, medicine: string }) {
    return this.http.put(`${this.logsUrl}/medicine`, medInfo)
  }
  getLogsNoTimeOut() {
    return this.http.get('logs/notimeout');
  }
  create(log: LogCreateDTO) {
    return this.http.post('logs/', log);
  }
  delete(id: number) {
    let httpParams = new HttpParams().set('id', id);
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }), params: httpParams };

    return this.http.delete(this.logsUrl, options)
  }
}
