// in useActions.ts file
import axios from 'axios';
import {
  setAuthenticated, setUnauthenticated, setErrors, clearErrors,
} from '@redux/createActions';

export const loginUser = (userData: any) => (dispatch: any) => {
  console.log('Called Login User');
  return (axios.post('http://localhost:3000/auth/login', JSON.stringify(userData))
    .then((res) => {
      const token = `Bearer ${res.data.access_token}`;
      localStorage.setItem('token', token); // setting token to local storage
      // setting authorize token to header in axios
      axios.defaults.headers.common.Authorization = token;
      dispatch(setAuthenticated());
      dispatch(clearErrors());
      console.log('success');
    })
    .catch((err) => {
      console.log('Could not log in', err.message);
      dispatch(setErrors(err));
    }));
};

export const registerUser = (userData: any) => (dispatch: any) => {
  console.log('Called Register User');
  return (axios.post('http://localhost:3000/auth/register', userData)
    .then((res) => {
      const token = `Bearer ${res.data.access_token}`;
      localStorage.setItem('token', token);
      axios.defaults.headers.common.Authorization = token;
      dispatch(setAuthenticated());
      dispatch(clearErrors());
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
      dispatch(setErrors(err));
    }));
};

export const logoutUser = () => (dispatch: any) => {
  console.log('Called Logout User');
  localStorage.removeItem('token');
  delete axios.defaults.headers.common.Authorization;
  dispatch(setUnauthenticated());
  return ('done');
};
