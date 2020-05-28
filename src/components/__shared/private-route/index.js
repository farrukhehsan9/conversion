import { Redirect, Route } from "react-router-dom";
import React from 'react';
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useSelector(state => state.login);
  return (
    <Route
      {...rest}
      render={props => {
       return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};
