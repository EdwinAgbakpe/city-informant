import Logo from '@assets/City.svg';
import { NavLink } from 'react-router-dom';
import { Button } from '@components/Button';
import { root, dashboard } from '@navigation/Constants';

interface INav{
  isAdmin: boolean,
  isProtected: boolean,
  onLogout: () => void,

}
export const NavBarView = function ({ isAdmin, isProtected, onLogout }:INav) {
  return (
    <div className="flex flex-wrap justify-between py-4 px-8 gap-3">
      <NavLink
        to={isAdmin ? dashboard : root}
      >
        <div className="flex flex-wrap flex-row space-x-3 items-center">
          <img src={Logo} alt="Logo" className="h-12" />
          <h1 className="font-hand text-3xl text-green text-center">City Informant</h1>
        </div>
      </NavLink>
      {isAdmin && isProtected && (<Button isPrimary isCancel text="Logout" onClick={onLogout} />)}
    </div>

  );
};
