import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedEdit = ({ auth }) => {
  return auth !== null ? <Outlet/> : <Navigate to={"/my-profile"} />;
};

export default ProtectedEdit;
