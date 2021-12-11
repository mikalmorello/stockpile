import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);

  // If not authenticated
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  // Else follow to correct path
  return <Outlet />;
};

export default PrivateRoute;
