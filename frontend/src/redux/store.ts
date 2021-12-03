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
  ),
);

export default store;
