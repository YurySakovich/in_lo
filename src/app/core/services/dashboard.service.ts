import { Injectable } from '@angular/core';
import { environment } from '@env';

import { of, Observable } from 'rxjs';

import { ApiService } from './api.service';

@Injectable()
export class DashboardService {
    private API_URL = environment.api.baseUrl;
    private AUTH_URL = environment.api.authUrl;
    private LOCAL_URL = environment.api.localUrl;

    constructor(private apiService: ApiService) { }

    getCardDara(): Observable<any> {
        return of([1,1])
    }
}