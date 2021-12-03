/* eslint-disable react/require-default-props */
import { login } from '@navigation/Constants';
import { logoutUser } from '@redux/Actions/userActions';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavBarView } from './NavBarView';

interface INavContainer{
  isAdmin: boolean,
  isProtected: boolean,
  UI?: any,
  dispatch?: any,
}

const NavBarContainer = function ({
  isAdmin, isProtected, UI, dispatch,
}: INavContainer) {
  const [errors, setErrors] = useState([] as Error[]);
  const navigate = useNavigate();

  useEffect(() => {
    if (UI.errors) {
      setErrors(UI.errors);
    }
  }, [UI]);

  const onLogout = (e:any) => {
    e.preventDefault();
    try {
      dispatch(logoutUser())
        .then(() => navigate(login))
        .catch((err:any) => console.log(err));
    } catch (err:any) {
      setErrors((prevErrors):Error[] => ([...prevErrors, err]));
      console.log('error');
    }
  };

  return (
    <div id="navbar">
      <NavBarView
        isAdmin={isAdmin}
        isProtected={isProtected}
        onLogout={onLogout}
        errors={errors}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.user,
  UI: state.UI,
});

const connectedNav = connect(mapStateToProps)(NavBarContainer);
export { connectedNav as NavBarContainer };
