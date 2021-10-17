import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const baseUrl = 'http://localhost:3000/api'
    const request = req.clone({
      url: `${baseUrl}/${req.url}`
    })
    return next.handle(request);
  }
}
