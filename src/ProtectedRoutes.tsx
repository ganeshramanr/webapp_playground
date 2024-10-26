
// import { useContext } from "react";
import {useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const location = useLocation();
  const value = true; // TODO
  
  return (
    value ? 
    <Outlet /> 
    : 
    <Navigate to="/" state={{from: location}} replace />
  )
}

export default ProtectedRoutes
