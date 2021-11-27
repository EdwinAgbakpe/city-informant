import { Routes, Route } from 'react-router-dom';
import { root } from '@navigation/Constants';
import Home from '@pages/Home';

export const RouterConfig = function () {
  return (
    <div>
      <Routes>
        <Route path={root} element={<Home />} />
      </Routes>
    </div>
  );
};
