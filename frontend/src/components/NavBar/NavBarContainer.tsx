/* eslint-disable no-alert */
import { NavBarView } from './NavBarView';

interface INavContainer{
  isAdmin: boolean,
  isProtected: boolean,
}
export const NavBarContainer = function ({ isAdmin, isProtected }: INavContainer) {
  const onLogout = () => { alert('Logout'); };
  return (
    <div id="navbar">
      <NavBarView isAdmin={isAdmin} isProtected={isProtected} onLogout={onLogout} />
    </div>
  );
};
