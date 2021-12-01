import getCities from '@services/Cities';
import { ICity } from '@interfaces/ICity';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { addCity } from '@navigation/Constants';
import { DashboardView } from './DashboardView';

export const DashboardContainer = function () {
  const [cities, setCities] = useState<ICity[]>();
  const navigate = useNavigate();
  useEffect(() => {
    const retrieveData = () => {
      getCities().then(
        (res: any) => {
          setCities(res);
        },
      );
    };
    retrieveData();
  }, []);

  const handleAdd = () => {
    navigate(addCity);
  };
  return (
    <div id="Dashboard">
      {cities && <DashboardView cities={cities} onAdd={handleAdd} />}
    </div>
  );
};
