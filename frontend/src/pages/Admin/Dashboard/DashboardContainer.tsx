/* eslint-disable react/require-default-props */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { addCity } from '@navigation/Constants';
import { connect } from 'react-redux';
import { getCities } from '@redux/Actions/citiesActions';
import { ICity } from '@interfaces/ICity';
import { DashboardView } from './DashboardView';

interface IDashboardContainer{
  UI?: any,
  cities?: ICity[],
  dispatch?: any,
}

const DashboardContainer = function ({ UI, cities, dispatch }: IDashboardContainer) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([] as any[]);

  useEffect(() => {
    dispatch(getCities())
      .catch((err: any) => setErrors((prevErrors):Error[] => ([...prevErrors, err])));
    if (UI.errors) {
      // setErrors(UI.errors);
      console.log('Interest:', typeof UI.errors);
    }
  }, [UI]);

  const handleAdd = () => {
    navigate(addCity);
  };
  return (
    <div id="Dashboard">
      {cities && <DashboardView cities={cities} onAdd={handleAdd} errors={errors} />}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  cities: state.cities,
  UI: state.UI,
});

const connectedDashboardContainer = connect(mapStateToProps)(DashboardContainer);
export { connectedDashboardContainer as DashboardContainer };
