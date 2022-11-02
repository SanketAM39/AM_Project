import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

const ProtectedProfile = ({ auth }) => {
  return (
      auth !== null ? <Outlet /> : <Navigate to={'/auth/login'} />
  )
      
}
    
export default ProtectedProfile;