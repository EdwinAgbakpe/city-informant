/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
/* eslint-disable react/require-default-props */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ICity } from '@interfaces/ICity';
import {
  getCity, postCity, deleteCity, updateCity,
} from '@redux/Actions/cityActions';
import { dashboard } from '@navigation/Constants';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';
import { CityFormView } from './CityFormView';

interface ICityFormContainer{
  isAdd: boolean;
  UI?: any,
  CityInfo?: ICity,
  dispatch? : any,
}
interface IFormData{
  name: string,
  name_native: string,
  country: string,
  continent: string,
  population: number,
  founded: number,
  latitude: number,
  longitude: number,
  addLandmark ?: string,
}
interface ICityData extends IFormData {
  landmarks: string[],
}

let initialCityInfo = {} as ICity;

const CityFormContainer = function ({
  isAdd, UI, CityInfo, dispatch,
}: ICityFormContainer) {
  const navigate = useNavigate();
  const cityName = useParams<any>();
  const [formData, setFormData] = useState({
    name: '',
    name_native: '',
    country: '',
    continent: '',
    population: 0,
    founded: 0,
    latitude: 0.0,
    longitude: 0.0,
    addLandmark: '',
  });
  const [landmarks, setLandmarks] = useState<string[]>([]);
  const [errors, setErrors] = useState([] as Error[]);

  useEffect(() => {
    if (!isAdd) {
      console.log('isInfo', cityName);
      const { name } = cityName;
      if (typeof name === 'string') {
        dispatch(getCity(name));
      }
    }
    if (UI.errors) {
      setErrors(UI.errors);
    }
  }, [UI]);

  useDidMountEffect(() => {
    if (CityInfo) {
      console.log('City updated', CityInfo);
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: CityInfo.name,
        country: CityInfo.country,
        name_native: CityInfo.name_native,
        continent: CityInfo.continent,
        population: CityInfo.population,
        founded: CityInfo.founded,
        latitude: CityInfo.latitude,
        longitude: CityInfo.longitude,
      }));
      setLandmarks(CityInfo.landmarks);
      initialCityInfo = { ...CityInfo };
      delete initialCityInfo._id;
    }
  }, [CityInfo]);

  const validateForm = function () {
    if (!formData.name.match(/\p{L}+/u)) throw new Error('Invalid Name');
    if (!formData.name_native.match(/\p{L}+/u)) throw new Error('Invalid Native Name');
    if (!formData.country.match(/\p{L}+/u)) throw new Error('Invalid Country');
    if (!formData.continent.match(/\p{L}+/u)) throw new Error('Invalid Continent');
    if (!formData.founded.toString().match(/[1-9][0-9]*/)) throw new Error('Invalid Founded');
    if (!formData.population.toString().match(/[1-9][0-9]*/)) throw new Error('Invalid Population');
    if (!formData.longitude.toString().match(/^-?[0-9]*.[0-9]+$/)) throw new Error('Invalid Longitude');
    if (!formData.latitude.toString().match(/^-?[0-9]*.[0-9]+$/)) throw new Error('Invalid Latitude');
  };

  const onChange = (e:any) => {
    e.persist();
    const { name, value } = e.target;
    setErrors([]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onAddLandmark = () => {
    console.log(`Adding ${formData.addLandmark}`);
    setLandmarks([...landmarks, formData.addLandmark]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      addLandmark: '',
    }));
  };
  const onRemoveLandmark = (e:any) => {
    const id = e.target.getAttribute('data-listid');
    const newArr = [...landmarks];
    newArr.splice(id, 1);
    console.log(newArr);
    setLandmarks([...newArr]);
  };

  const submitCityForm = (e:any) => {
    e.preventDefault();
    try {
      validateForm();
      console.log('valid form');
      console.log('initial', initialCityInfo);
      const cityData:ICityData = { ...formData, landmarks };
      delete cityData.addLandmark;
      if (isAdd) {
        dispatch(postCity(cityData))
          .then(() => navigate(dashboard))
          .catch((err:any) => console.log(err));
      } else if (isEqual(cityData, initialCityInfo)) navigate(dashboard);
      else {
        dispatch(updateCity(cityData))
          .then(() => navigate(dashboard))
          .catch((err: any) => console.log(err));
      }
    } catch (err: any) {
      setErrors((prevErrors):Error[] => ([...prevErrors, err]));
      console.log(err.message);
    }
  };

  const onDeleteCity = () => {
    try {
      if (!isAdd && CityInfo && window.confirm('Are you sure about the delete?')) {
        dispatch(deleteCity(CityInfo.name))
          .then(() => navigate(dashboard))
          .catch((err:any) => console.log(err));
      }
    } catch (err: any) {
      setErrors((prevErrors):Error[] => ([...prevErrors, err]));
      console.log(err.message);
    }
  };

  return (
    <div>
      <CityFormView
        onChange={onChange}
        onSubmit={submitCityForm}
        onDelete={onDeleteCity}
        onAddLandmark={onAddLandmark}
        onRemoveLandmark={onRemoveLandmark}
        form={formData}
        landmarks={landmarks}
        errors={errors}
        isAdd={isAdd}
      />
    </div>
  );
};

const useDidMountEffect = (func:any, deps:any) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

// this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
  CityInfo: state.city,
  UI: state.UI,
});

const connectedCityFormContainer = connect(mapStateToProps)(CityFormContainer);
export { connectedCityFormContainer as CityFormContainer };
