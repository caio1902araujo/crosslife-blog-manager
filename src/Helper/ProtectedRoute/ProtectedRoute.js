import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../Hooks/useAuth';

const ProtectedRoute = ({component}) => {
  const {login} = React.useContext(AuthContext);
  return login ? component : <Navigate to='/' /> 
}

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired
}

export default ProtectedRoute;
