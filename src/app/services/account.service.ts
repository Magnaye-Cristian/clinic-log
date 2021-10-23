import { Injectable } from '@angular/core';
import { HttpClientHelperService } from './http-client-helper.service';
import jwt_decode from 'jwt-decode';
import { IProfile } from '../models/profile.model';
import { IRegister } from '../models/register.models';
import { ROLEENUM } from '../models/role.enum';
import { Router } from '@angular/router';
import { ILogin } from '../models/login.model';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { IAccount } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  /**
   * all http request logic
   * move here all the functionality that has relationship with account
   * login
   * register
   * update
   */
  constructor(private http: HttpClientHelperService, private router: Router) { }

  updateProfile(updateForm: any) {
    return this.http.put('profile', updateForm)
  }
  get(school_id: string) {
    // const options: Object = { observe: 'response', headers: new HttpHeaders({ 'x-auth-token': '' }) };
    return this.http.get<IAccount>(`accounts/searchAll/${school_id}`);
  }
  getAccounts(role: ROLEENUM) {
    return this.http.get<IAccount[]>(`accounts/${role}`)
  }
  getProfileFromServer() {
    return this.http.get<IProfile>('profile/me');
  }
  isAllowedToAccess(role: string): boolean {
    const profile = this.getProfileFromToken();
    if (!profile) return false;
    console.log(`role ${role}`)
    console.log(`profile role ${profile.role}`)
    return profile.role === role;
  }

  login(login: ILogin) {
    const response = this.http.post('authenticate', login);
    response.subscribe((result: HttpResponse<Object>) => {

    })
    return response;
  }

  logout() {
    localStorage.clear()
    this.router.navigate(['/'])
  }

  register(register: IRegister) {
    //create register dto
    return this.http.post('register', register)
  }

  getProfileFromToken(): IProfile {
    /**
     * get values from token
     */
    const token = localStorage.getItem('token');
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }

  }

  generateCode(codeRequest: { number_of_codes: number, role: string }) {

    console.log(codeRequest)
    return this.http.post('accounts/code', codeRequest)
  }

  navigateByRole(role: string): void {
    console.log(`role is ${role}`)
    let link: string
    if (role === ROLEENUM.HEAD_ADMIN)
      link = 'head-admin'
    if (role === ROLEENUM.ADMIN)
      link = 'admin-account'
    if (role === ROLEENUM.FACULTY)
      link = 'faculty-account'
    if (role === ROLEENUM.STAFF)
      link = 'staff-account'
    if (role === ROLEENUM.STUDENT)
      link = 'student-account'
    this.router.navigate([`/${link}`]);
  }
}
