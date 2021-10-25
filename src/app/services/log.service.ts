import { HttpHeaders, HttpParams } from '@angular/common/http';
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
  logsUrl = 'logs'
  getLogsNoTimeOut() {
    return this.http.get('logs/notimeout');
  }
  create(log: LogCreateDTO) {
    return this.http.post('logs/', log);
  }
<<<<<<< HEAD
}
=======
  delete(id: number) {
    let httpParams = new HttpParams().set('id', id);
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }), params: httpParams };

    return this.http.delete(this.logsUrl, options)
  }
}
>>>>>>> 3d69e28c28c01e0166bbc834928fae4da5e053ca
