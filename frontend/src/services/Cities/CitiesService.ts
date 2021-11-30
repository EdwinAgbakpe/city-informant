import axios from 'axios';
import { GetCities } from './Constants';

export const getCitiesInfo = () => {
  console.log('CityService > getCities called.');
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .get(GetCities())
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          console.log('GetCity > axios err=', err);
          reject(err);
        });
    } catch (error) {
      console.error('in CityService > getCityData, Err===', error);
      reject(error);
    }
  });
};
