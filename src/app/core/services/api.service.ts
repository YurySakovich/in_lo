import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env';

export interface ApiHttpOptions {
  body?: any;
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  params?: HttpParams | {
    [param: string]: string | string[];
  };
  observe?: 'body' | 'events' | 'response';
  reportProgress?: boolean;
  responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
  withCredentials?: boolean;
}

// This needs to be connected to caching!

@Injectable()
export class ApiService {
  public readonly clientRootUrl = environment.api;

  constructor(private http: HttpClient) {
  }

  public get<T>(url: string, options: ApiHttpOptions = {}): Observable<T> {
    return this.http.request('GET', this.buildUrl(url), options);
  }

  public getBlob(url: string, options: ApiHttpOptions = {}): Observable<Blob> {
    options.responseType = 'blob';

    return this.get(url, options);
  }

  public post<T>(url: string, options: ApiHttpOptions = {}): Observable<T> {
    return this.http.request('POST', this.buildUrl(url), options);
  }

  public postBlob(url: string, options: ApiHttpOptions = {}): Observable<Blob> {
    options.responseType = 'blob';

    return this.post(url, options);
  }

  public put<T>(url: string, options: ApiHttpOptions = {}): Observable<T> {
    return this.http.request('PUT', this.buildUrl(url), options);
  }

  public delete<T>(url: string, options: ApiHttpOptions = {}): Observable<T> {
    return this.http.request('DELETE', this.buildUrl(url), options);
  }

  private buildUrl(path: string): string {
    // TODO change with base api url
    return `${path}`;
  }

  public getNodeRootUrl(node) {
    return 'nodes/' + node.uuid;
  }

}
