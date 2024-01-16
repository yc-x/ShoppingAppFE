import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   if(!this.shouldExcludeRequest(request)){
    const ACCESS_TOKEN = localStorage.getItem('Bearer Token');
    const authReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
    });
    return next.handle(authReq);
  }
    // HttpHandler to clone our Request Object and append a token to the header
    return next.handle(request);
  }

  private shouldExcludeRequest(req: HttpRequest<any>): boolean {
    return (
      req.url.includes('api/auth')
      // Add more conditions as needed
    );
  }
}
