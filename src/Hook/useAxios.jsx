import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useAuth();

  useEffect(() => {
    const handleResponseError = async (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        try {
          await logOut();
          
        } catch (logoutError) {
          console.error("Error during logout:", logoutError);
        }
      }
      return Promise.reject(error);
    };

    // Add interceptor for response errors
    const responseInterceptor = instance.interceptors.response.use(
      (response) => response,
      handleResponseError
    );

    return () => {
      // Clean up interceptor on unmount or when necessary
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [logOut]);

  return instance;
};

export default useAxios;
