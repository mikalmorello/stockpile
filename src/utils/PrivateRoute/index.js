import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

// Handle private routes
const PrivateRoute = ({ children, ...rest }) => {
  // Set state
  let { user } = React.useContext(AuthContext);

  // If user is not authenticated
  if (!user) {
    // Redirect to login page
    return <Navigate to="/login"></Navigate>;
  }
  // Else follow to correct path
  return <Outlet />;
};

export default PrivateRoute;
