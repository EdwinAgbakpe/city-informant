import {
  SET_ERRORS, CLEAR_ERRORS, SET_CITIES, SET_CITY, SET_UNAUTHENTICATED, SET_AUTHENTICATED,
} from '@redux/types';
import { ICity } from '@interfaces/ICity';
import { createAction } from 'redux-actions';

export const setCity = createAction<ICity>(SET_CITY);

export const setCities = createAction<ICity[]>(SET_CITIES);

export const clearErrors = createAction(CLEAR_ERRORS);

export const setErrors = createAction<any>(SET_ERRORS);

export const setAuthenticated = createAction(SET_AUTHENTICATED);

export const setUnauthenticated = createAction(SET_UNAUTHENTICATED);
