import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token')
    /**
     * if token is empty and the url is not for registration or login then clear everything and redirect to login page
     */
    const request = req.clone({
      setHeaders: {
        'x-auth-token': `${token}`
      }
    })
    return next.handle(request)
  }
}
