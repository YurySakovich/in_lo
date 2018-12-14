import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = this.authService.getToken();

    if (!token || this.authService.isExpired()) {
      return true;
    }

    this.router.navigate([`/dashboard`]);
    return false;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(next, state);
  }
}
