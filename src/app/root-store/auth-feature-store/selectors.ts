import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { User } from '../../models';

import { State } from './state';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getUser = (state: State): any => state.user;

export const selectAuthFeatureState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('myFeature');

export const selectAuthFeatureError: MemoizedSelector<object, any> = createSelector(
  selectAuthFeatureState,
  getError
);

export const selectAuthFeatureIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectAuthFeatureState, getIsLoading);

export const selectAuthFeature: MemoizedSelector<
  object,
  User
> = createSelector(selectAuthFeatureState, getUser);