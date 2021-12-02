import {
  SET_CITIES,
} from '@redux/types';
import { Action, handleActions } from 'redux-actions';
import { ICity } from '@interfaces/ICity';

const initialState = [] as ICity[];

type State = ICity[]

export default handleActions<State, ICity[]>({
  [SET_CITIES]: (state, { payload }:Action<ICity[]>): State => ([...payload]),
}, initialState);
