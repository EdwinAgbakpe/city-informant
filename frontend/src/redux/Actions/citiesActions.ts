import axios from 'axios';
import {
  setCities, setErrors,
} from '@redux/createActions';

export const getCities = () => (dispatch: any) => {
  console.log('Getting Cities');
  return (axios.get('http://localhost:3000/cities')
    .then((res) => {
      dispatch(setCities(res.data));
      console.log('success');
    })
    .catch((err) => {
      console.log(err);
      dispatch(setErrors);
    }));
};
