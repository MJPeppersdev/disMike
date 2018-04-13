import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact, currentUser }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={`/@me/`} />
        )}
    />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {


  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />}
    />
  );
};

const Personal = ({ component: Component, path, loggedIn, exact }) => {
  const pathroute = path.split('/');
  debugger
  if (pathroute[1] !== '@me') {
    return (
      <Route
        path={path}
        exact={exact}
        render={props =>
          loggedIn ? <Component {...props} /> : <Redirect to="/login" />}
      />
  );
  }
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser), currentUser: state.session.currentUser};
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(
  connect(mapStateToProps)(Protected)
);

export const PersonalRoute = withRouter(
  connect(mapStateToProps)(Personal)
);
