import {
  SET_CITY,
} from '@redux/types';
import { Action, handleActions } from 'redux-actions';
import { ICity } from '@interfaces/ICity';

const initialState = {
  _id: '',
  name: '',
  name_native: '',
  country: '',
  continent: '',
  population: 0,
  founded: 0,
  latitude: 0.0,
  longitude: 0.0,
  landmarks: [],
} as ICity;

type State = ICity

export default handleActions<State, ICity>({
  [SET_CITY]: (state, { payload }:Action<ICity>): State => ({ ...payload }),
}, initialState);
