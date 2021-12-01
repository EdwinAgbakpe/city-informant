import { Routes, Route } from 'react-router-dom';
import {
  root,
  quiz,
  login,
  register,
  dashboard,
  cityInfo,
  addCity,
} from '@navigation/Constants';
import Home from '@pages/Home';
import Quiz from '@pages/Quiz';
import AddCity from '@pages/Admin/AddCity';
import CityInfo from '@pages/Admin/CityInfo';
import Dashboard from '@pages/Admin/Dashboard';
import Login from '@pages/Admin/Login';
import Register from '@pages/Admin/Register';

export const RouterConfig = function () {
  return (
    <div>
      <Routes>
        <Route path={root} element={<Home />} />
        <Route path={quiz} element={<Quiz />} />
        <Route path={login} element={<Login />} />
        <Route path={register} element={<Register />} />
        <Route path={dashboard} element={<Dashboard />} />
        <Route path={`${cityInfo}:name`} element={<CityInfo />} />
        <Route path={addCity} element={<AddCity />} />
      </Routes>
    </div>
  );
};
