import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICode } from '../models/code.model';

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  codeList: Subject<any> = new Subject();
  constructor() { }
}
