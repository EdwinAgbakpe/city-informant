import { NavBarView } from './NavBarView';

interface INavContainer{
  type: string,
}
export const NavBarContainer = function ({ type }: INavContainer) {
  return (
    <div id="navbar">
      <NavBarView to={type === 'admin' ? '/admin/' : '/'} />
    </div>
  );
};
