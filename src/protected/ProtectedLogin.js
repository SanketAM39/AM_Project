import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedLogin = ({ auth }) => {
return auth === null ? <Outlet /> : <Navigate to={"/my-profile"} />;
}
 

export default ProtectedLogin;
