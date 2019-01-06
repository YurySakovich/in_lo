import {Injectable} from '@angular/core';
import {environment} from '@env';

import {Observable} from 'rxjs';

import {ApiService} from './api.service';

@Injectable()
export class UserService {
  private API_URL = environment.api.baseUrl;
  private AUTH_URL = environment.api.authUrl;
  private LOCAL_URL = environment.api.localUrl;

  constructor(private apiService: ApiService) {}

  getUserEntity(): Observable<any> {
    return this.apiService.get(`${this.API_URL}/main/client/entity`);
  }

  getUserInfo(): Observable<any> {
    return this.apiService.get(`${this.API_URL}/main/client/info`);
  }
}
