import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedProfile = ({ auth }) => {
  return auth !== null ? <Outlet /> : <Navigate to={"/auth/login"} />;
};

export const ProtectedLogin = ({ auth }) => {
  return auth === null ? <Outlet /> : <Navigate to={"/my-profile"} />;
};

// export const ProtectedEdit = ({ auth }) => {
//   return auth !== null ? <Outlet /> : <Navigate to={"/my-profile"} />;
// };
