import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '@core/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService,
    private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getToken();

    if (token && !this.authService.isExpired()) {
      return true;
    }

    this.authService.logOut();

    return false;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(next, state);
  }
}
