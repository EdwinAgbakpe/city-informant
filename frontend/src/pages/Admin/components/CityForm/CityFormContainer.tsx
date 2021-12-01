/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICity } from '@interfaces/ICity';
import { dashboard } from '@navigation/Constants';
import { CityFormView } from './CityFormView';

interface ICityFormContainer{
  isAdd: boolean;
}

export const CityFormContainer = function ({ isAdd }: ICityFormContainer) {
  const navigate = useNavigate();
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

  const onChange = (e:any) => {
    const { name, value } = e.target;
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

  const submitCityForm = () => {
    navigate(dashboard, { replace: true });
  };

  const deleteCity = () => {
    alert(`attempted to delete ${formData.name}`);
    navigate(dashboard, { replace: true });
  };

  return (
    <div>
      <CityFormView
        onChange={onChange}
        onSubmit={submitCityForm}
        onDelete={deleteCity}
        onAddLandmark={onAddLandmark}
        onRemoveLandmark={onRemoveLandmark}
        form={formData}
        landmarks={landmarks}
        isAdd={isAdd}
      />
    </div>
  );
};
