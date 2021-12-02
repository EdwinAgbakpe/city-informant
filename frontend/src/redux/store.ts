/* eslint-disable no-unused-vars */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import userReducer from '@redux/Reducers/userReducer';
import citiesReducer from '@app/redux/Reducers/citiesReducer';
import cityReducer from '@app/redux/Reducers/cityReducer';
import uiReducer from '@redux/Reducers/uiReducer';

const initialState = {};
const middleware = [thunk];
// this is for redux devtool purpose
declare global {
  interface Window {
  __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const reducer = combineReducers({
  user: userReducer,
  cities: citiesReducer,
  city: cityReducer,
  UI: uiReducer,
});
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any,
  ),
);
export default store;
