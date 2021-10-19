import { Injectable } from '@angular/core';
import { HttpClientHelperService } from './http-client-helper.service';
import jwt_decode from 'jwt-decode';
import { IProfile } from '../models/profile.model';

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
  constructor(private http: HttpClientHelperService) { }

  updateProfile(updateForm: any) {
    return this.http.put('profile', updateForm)
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
}
