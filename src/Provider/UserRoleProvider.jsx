import { createContext, useEffect, useState } from "react";
import useAxios from "../Hook/useAxios";
import useAuth from "../Hook/useAuth";

//context
export const UserRoleContext = createContext(null);

// eslint-disable-next-line react/prop-types
const UserRoleProvider = ({ children }) => {
  //axios hook call
  const axios = useAxios();
  const { user, loading } = useAuth();
  const [Loading, setLoading] = useState(true);
  const [roleData, setRoleData] = useState([]);

  //useEffect
  useEffect(() => {
    const fetchRoleData = async () => {
      if (!loading && user) {
        try {
          const result = await axios.get(`/users/${user?.email}`);
          console.log(result?.data);
          setRoleData(result?.data);
        } catch (error) {
          console.log(error);
          setRoleData(null);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRoleData();
  }, [user, loading, axios]);

  return (
    <UserRoleContext.Provider value={{ roleData, Loading }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export default UserRoleProvider;
