/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import useUserRole from "../Hook/useUserRole";


const AdminRoute = ({children}) => {
  //users and loading
  const { user, loading } = useAuth();

  //useUserRole hook call
  const [roleData] = useUserRole()
  const {isAdmin,isPending} = roleData || {}

  //location
  const location = useLocation();

  if (loading || isPending) {
    return (
      <p className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </p>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
