import axios from 'axios';
import {
  setCity, setErrors, clearErrors,
} from '@redux/createActions';

export const getCity = (name: string) => (dispatch: any) => {
  console.log('get City');
  return (axios.get(`http://localhost:3000/cities/${name}`)
    .then((res) => {
      dispatch(setCity(res.data));
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
      dispatch(setErrors);
    }));
};

export const postCity = (cityData: any) => (dispatch: any) => {
  console.log('post');
  return (axios.post('http://localhost:3000/cities', cityData)
    .then((res) => {
      console.log('Posted City', res.data);
      dispatch(clearErrors);
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
      dispatch(setErrors);
    }));
};

export const updateCity = (cityData: any) => (dispatch: any) => {
  console.log('update');
  return (axios.patch(`http://localhost:3000/cities/${cityData.name}`, cityData)
    .then((res) => {
      console.log('Updated City', res.data);
      dispatch(clearErrors);
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
      dispatch(setErrors);
    }));
};

export const deleteCity = (name: string) => (dispatch: any) => {
  console.log('delete');
  return (axios.delete(`http://localhost:3000/cities/${name}`)
    .then((res) => {
      console.log('Updated City', res.data);
      dispatch(clearErrors);
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
      dispatch(setErrors);
    }));
};
