import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '@env';

import {Observable} from 'rxjs';

import {LocalStorageService} from './local-storage.service';
import {ApiService} from './api.service';

@Injectable()
export class AuthService {
  private API_URL = environment.api.baseUrl;
  private AUTH_URL = environment.api.authUrl;
  private LOCAL_URL = environment.api.localUrl;

  constructor(
    private localStorageService: LocalStorageService,
    private apiService: ApiService,
    private router: Router
  ) {}

  public signIn(credentials: any): Observable<any> {
    const body = credentials;

    return this.apiService.post(`${this.AUTH_URL}/auth/login`, {body});
  }

  public logOut(): void {
    this.localStorageService.clearStorage();

    this.router.navigate(['/auth', 'login']);
  }

  public isExpired(): boolean {
    const expiration = this.localStorageService.get('expiration');
    const res = new Date() > new Date(`${expiration}`);

    return res;
  }

  public handleSignIn(user: any) {
    this.localStorageService.set('token', `Bearer ${user.token}`);
    this.localStorageService.set('expiration', `${user.expiration}`);
    this.router.navigate(['/dashboard']);
  }
}
