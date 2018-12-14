import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@core/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router,
              private authService: AuthService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.authService.getToken();
    let modifiedReq = req;

    if (token) {
      modifiedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
    }

    return next.handle(modifiedReq);
  }
}
