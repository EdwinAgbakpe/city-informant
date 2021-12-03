/* eslint-disable react/require-default-props */
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './Constants';

interface IPrivateRoute {
  authenticated: boolean,
}
const PrivateRoute = function ({
  authenticated,
}: IPrivateRoute) {
  return (
    authenticated ? <Outlet /> : <Navigate replace to={login} />
  );
};

const mapStateToProps = (state:any) => ({
  authenticated: state.user.authenticated,
});

const connectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);

export { connectedPrivateRoute as PrivateRoute };
