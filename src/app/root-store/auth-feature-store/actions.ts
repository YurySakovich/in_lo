import { Action } from '@ngrx/store';
import { User } from '../../models';

export enum ActionTypes {
  LOGIN_REQUEST = '[My Feature] Login Request',
  LOGIN_FAILURE = '[My Feature] Login Failure',
  LOGIN_SUCCESS = '[My Feature] Login Success',
  LOGOUT_REQUEST = '[My Feature] Logout Request',
  LOGOUT_FAILURE = '[My Feature] Logout Failure',
  LOGOUT_SUCCESS = '[My Feature] Logout Success'
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: { username: string; password: string, client: string }) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: {user: User}) {}
}

export class LogoutRequestAction implements Action {
  readonly type = ActionTypes.LOGOUT_REQUEST;
  constructor() {}
}

export class LogoutFailureAction implements Action {
  readonly type = ActionTypes.LOGOUT_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LogoutSuccessAction implements Action {
  readonly type = ActionTypes.LOGOUT_SUCCESS;
  constructor() {}
}


export type Actions = LoginRequestAction | LoginFailureAction | LoginSuccessAction | LogoutRequestAction | LogoutSuccessAction | LogoutFailureAction;