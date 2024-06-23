/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { useContext } from "react";
import { UserRoleContext } from "../Provider/UserRoleProvider";


const AdminRoute = ({children}) => {
  //users and loading
  const { user, loading } = useAuth();
  const roleContext = useContext(UserRoleContext)
  const {roleData,Loading} = roleContext || {}

  console.log(roleData);

  //location
  const location = useLocation();

  if (loading || Loading) {
    return (
      <p className="flex justify-center items-center min-h-screen">
        <span className="loading loading-infinity loading-lg"></span>
      </p>
    );
  }

  if (!user || !roleData?.isAdmin ) {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoute;
