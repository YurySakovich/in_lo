
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf, of } from 'rxjs';
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { AuthService } from '@core/services/auth.service';
import * as featureActions from './actions';
import { User } from '../../models';

@Injectable()
export class AuthFeatureStoreEffects {
  constructor(private authService: AuthService,
    private actions$: Actions) { }

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoginRequestAction>(
      featureActions.ActionTypes.LOGIN_REQUEST
    ),
    switchMap(action =>
      this.authService
        .signIn({ client: action.payload.client, username: action.payload.username, password: action.payload.password })
        .pipe(
          map(
            (user) => {
              return new featureActions.LoginSuccessAction({
                user
              });
            }
          ),
          catchError(error =>
            observableOf(new featureActions.LoginFailureAction({ error }))
          )
        )
    )
  );

  @Effect({ dispatch: false })
  loginSuccessEffect$: Observable<any> = this.actions$.pipe(
    ofType<featureActions.LoginSuccessAction>(
      featureActions.ActionTypes.LOGIN_SUCCESS
    ),
    tap(
      (authData) => {
        this.authService.handleSignIn(authData.payload.user)
      }
    )
  );

  @Effect()
  logoutRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LogoutRequestAction>(
      featureActions.ActionTypes.LOGOUT_REQUEST
    ),
    switchMap((action) =>observableOf(new featureActions.LogoutSuccessAction()))
  );

  @Effect({ dispatch: false })
  logoutSuccessEffect$: Observable<any> = this.actions$
  .pipe(
    ofType<featureActions.LogoutSuccessAction>(
      featureActions.ActionTypes.LOGOUT_SUCCESS
    ),
    tap(() => {this.authService.logOut();})
  );
}
