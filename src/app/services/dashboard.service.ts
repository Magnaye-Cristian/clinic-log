import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientHelperService } from './http-client-helper.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClientHelperService) { }

  getPurpose(day: number, month: number, year: number) {
    let httpParams = new HttpParams().set('day', day).set('month', month).set('year', year);
    const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }), params: httpParams };
    return this.http.get('dashboard/purpose', options);
  }
  getRoles() {
    return this.http.get('dashboard/roles');
  }

  getDashboardInfo() {
    return this.http.get('dashboard')
  }
  getMonthlyComplaintsOnYear(year: number) {
    return this.http.get(`dashboard/monthlycomplaints/${year}`)
  }
}
