import { useContext } from "react";
import { UserRoleContext } from "../Provider/UserRoleProvider";


const useUserRole = () => {
  const userRole = useContext(UserRoleContext)
  console.log(userRole);
  return userRole
};

export default useUserRole;