import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from '../Hooks/useAuth';

const ProtectedRoute = (props) => {
  const {login} = React.useContext(AuthContext);
  console.log('ndsjkd')
  if (login === true) return <Route {...props}/>;
  else if (login === false) return <Navigate to='/'/>;
  else return null;
}

export default ProtectedRoute
