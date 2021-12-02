import { SET_ERRORS, CLEAR_ERRORS } from '@redux/types';
import { Action, handleActions } from 'redux-actions';

const initialState = {
  errors: null,
};

type State = {
  errors: any
}

export default handleActions<State>({
  [SET_ERRORS]: (state, { payload }:Action<any>): State => ({ ...state, errors: payload }),
  [CLEAR_ERRORS]: () => (initialState),
}, initialState);
