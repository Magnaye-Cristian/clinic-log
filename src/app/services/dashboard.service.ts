import { Injectable } from '@angular/core';
import { HttpClientHelperService } from './http-client-helper.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClientHelperService) { }
  getDashboardInfo() {
    return this.http.get('dashboard')
  }
  getMonthlyComplaintsOnYear(year: number) {
    return this.http.get(`dashboard/monthlycomplaints/${year}`)
  }
}
