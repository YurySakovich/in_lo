import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { environment } from '@env';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthService {
  private API_URL = environment.api.baseUrl;
  private AUTH_URL = environment.api.authUrl;
  private LOCAL_URL = environment.api.localUrl;

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService,
              private router: Router) {}

  public setToken(token: string): void {
    this.localStorageService.set('token', `Bearer ${token}`);
  }

  public setExpiration(expiration: number): void {
    this.localStorageService.set('expiration', `${expiration}`);
  }

  public getToken(): string {
    return this.localStorageService.get('token');
  }

  public clearToken(): void {
    this.localStorageService.clearStorage();
  }

  public signIn(credentials: any): Observable<any> {
    const body = credentials;

    return this.http.post(`${this.AUTH_URL}/auth/login`, body);
  }

  public logOut(): void {
    this.clearToken();

    this.router.navigate(['/auth', 'login']);
  }

  public isExpired(): boolean {
    const expiration = localStorage.getItem('expiration');
    const res = new Date() > new Date(`${expiration}`);

    return res;
  }

  public handleSignIn(user: any) {
    this.setExpiration(user.token);
    this.setToken(user.expiration);
    this.router.navigate(['/dashboard']);
  }
}
