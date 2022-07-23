import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const ProtectedRoute = ( { Children } ) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/login' />;
  }
  return Children;
};

export default ProtectedRoute;
