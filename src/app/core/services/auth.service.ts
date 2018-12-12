import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthService {
  private tokenName = 'thing-it-jwt-token';

  constructor(private localStorageService: LocalStorageService) {

  }

  public storeToken(value: string): void {
    this.localStorageService.set(this.tokenName, value);
  }

  public getToken(): string {
    const token = this.localStorageService.get(this.tokenName);
    return token;
  }

  public removeToken(): void {
    const token = this.localStorageService.delete(this.tokenName);
  }
}
