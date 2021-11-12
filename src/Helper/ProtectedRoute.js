import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Hooks/useAuth';

const ProtectedRoute = () => {
  const {login} = React.useContext(AuthContext);
  return login ? <Outlet /> : <Navigate to="/" />
  
}

export default ProtectedRoute;
