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
  timeout(id: number) {
    return this.http.post(`${this.logsUrl}/timeoutLog`, { id: id });
  }
  getTally(month: number, year: number) {
    let httpParams = new HttpParams().set('month', month).set('year', year);
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }), params: httpParams };
    return this.http.get('logs/tally', options);
  }
  getLogsNoTimeOut() {
    return this.http.get('logs/notimeout');
  }
  create(log: LogCreateDTO) {
    return this.http.post('logs/', log);
  }
  getLogsWithTimeout(year: number, month: number, day: number) {
    let httpParams = new HttpParams().set('day', day).set('month', month).set('year', year);
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }), params: httpParams };
    return this.http.get('logs/withtimeout', options);
  }
  getMedicineRecord(year: number, month: number, day: number) {
    let httpParams = new HttpParams().set('day', day).set('month', month).set('year', year);
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }), params: httpParams };
    return this.http.get(`logs/medicine`, options)
  }
  delete(id: number) {
    let httpParams = new HttpParams().set('id', id);
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }), params: httpParams };

    return this.http.delete(this.logsUrl, options)
  }
}
