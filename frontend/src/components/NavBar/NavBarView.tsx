import Logo from '@assets/City.svg';
import { NavLink } from 'react-router-dom';

interface INav{
  to: string,
}
export const NavBarView = function ({ to }:INav) {
  return (
    <NavLink
      to={to}
    >
      <div className="flex flex-wrap flex-row space-x-3 items-center p-4">
        <img src={Logo} alt="Logo" className="h-12" />
        <h1 className="font-hand text-3xl text-green text-center">City Informant</h1>
      </div>
    </NavLink>

  );
};
