import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root'
})
export class FacultyGuard implements CanActivate {
  constructor(private account: AccountService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const isAllowedToAccess = this.account.isAllowedToAccess('faculty');
    console.log(`isAllowed to Access page: ${isAllowedToAccess}`);
    return isAllowedToAccess;
  }
}
