// components/Route/PrivateRouteInstitute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouteInstitute = () => {
  const auth = localStorage.getItem("AdhyayanAuth");

  return auth ? <Outlet /> : <Navigate to="/login-institute" replace />;
};

export default PrivateRouteInstitute;
