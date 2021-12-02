import {
  SET_AUTHENTICATED, SET_UNAUTHENTICATED,
} from '@redux/types';
import { handleActions } from 'redux-actions';

const initialState = {
  authenticated: false,
};

type State = {
  authenticated: boolean
}

export default handleActions<State>({
  [SET_AUTHENTICATED]: () => ({ authenticated: true }),
  [SET_UNAUTHENTICATED]: () => (initialState),
}, initialState);
