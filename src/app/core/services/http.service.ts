import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from '@angular/http';
import { AuthService } from '@core/services/auth.service';
import { catchError, finalize, map } from 'rxjs/operators';

/**
 * @deprecated. Use {@link ApiService} instead
 */
@Injectable()
export class ExtendedHttpService extends Http {
  public credentials;
  public token: string;

  constructor(private backend: XHRBackend,
              private authService: AuthService,
              options: RequestOptions) {
    super(backend, options);
  }

  /**
   * @deprecated. Use {@link ApiService} methods
   * @param {string | Request} url
   * @param {RequestOptionsArgs} options
   * @return {Observable<Response>}
   */
  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === 'string') {
      if (this.authService.getToken()) {
        if (!options) {
          options = {headers: new Headers()};
        }
        options.headers.set('Content-Type', 'application/json');
        options.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
        // const clientToken = Utils.getUuid();
        // options.headers.set('client-token', clientToken);
      }
    } else {
      if (this.authService.getToken()) {
        url.headers.set('Content-Type', 'application/json');
        url.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
        // const clientToken = Utils.getUuid();
        // url.headers.set('client-token', clientToken);

        // btoa(this.credentials.account + ':' + this.credentials.password)
      }
    }
    return super.request(url, options).pipe(catchError(this.catchAuthError));
  }

  getHeaders(): any {
    const headers = new Headers({'Content-Type': 'application/json'});

    // TODO Needed for testing in Angular CLI only

    if (this.authService.getToken()) {
      headers.append('Authorization', 'Bearer ' + this.authService.getToken()
        // btoa(this.credentials.account + ':' + this.credentials.password)
      );
    }

    return headers;
  }

  // getHeadersPortal(jwt): Headers {
  //     const headers = new Headers({ 'Content-Type': 'application/json' });

  //     // TODO Needed for testing in Angular CLI only
  //     if (this.credentials) {
  //         headers.append('Authorization', 'Bearer ' + jwt);
  //     }

  //     return headers;
  // }

  getOptions() {
    return new RequestOptions({headers: this.getHeaders()});
  }

  // getOptionsPortal(jwt: any) {
  //     return new RequestOptions({ headers: this.getHeadersPortal(jwt) });
  // }

  private catchAuthError(err: any) {
    if ((err instanceof Response) && (err.status === 401 || err.status === 403)) {
    }
    return observableThrowError(err);
  }

  /**
   * @deprecated. Use {@link ApiService} methods
   * @param {string} url
   * @param options
   */
  public get<T>(url: string, options?: any) {
    return super.get(url, options)
      .pipe(
        map((data: Response) => {
          if (data.headers.get('content-type') === 'image/png') {
            return data;
          } else {
            return this.parseJSON<T>(data);
          }
        }),
        catchError((err) => observableThrowError(err))
      );
  }

  /**
   * @deprecated. Use {@link ApiService} methods
   * @param {string} url
   * @param options
   */
  public post<T>(url: string, options?: any) {
    return super.post(url, options)
      .pipe(
        map((data: Response) => this.parseJSON<T>(data)),
        catchError((err) =>
          observableThrowError(err))
      );
  }

  /**
   * @deprecated. Use {@link ApiService} methods
   * @param {string} url
   * @param options
   */
  public put<T>(url: string, options?: any) {
    return super.put(url, options)
      .pipe(
        map((data: Response) => this.parseJSON<T>(data)),
        catchError((err) =>
          observableThrowError(err))
      );
  }

  /**
   * @deprecated. Use {@link ApiService} methods
   * @param {string} url
   * @param options
   */
  public delete<T>(url: string, options?: any) {
    // AppActions.pushSpinner();
    return super.delete(url, options)
      .pipe(
        map((data: Response) => this.parseJSON<T>(data)),
        catchError((err) => observableThrowError(err))
      );
  }

  private parseJSON<T>(data: any): T {
    if (data && data._body) {
      return data.json();
    }
    return data;
  }
}
