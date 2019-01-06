import {Injectable} from '@angular/core';
import {environment} from '@env';

import {Observable} from 'rxjs';

import {ApiService} from './api.service';

@Injectable()
export class PayeeService {
  private API_URL = environment.api.baseUrl;
  private AUTH_URL = environment.api.authUrl;
  private LOCAL_URL = environment.api.localUrl;

  constructor(private apiService: ApiService) {}

  getPortalTeamPayee(payeeId: number): Observable<any> {
    return this.apiService.get(`${this.API_URL}/portal/team/payee/${payeeId}`);
  }
}
