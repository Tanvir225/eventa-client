import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import UserSignUp from "../Pages/UserSignUp";
import VendorSignUp from "../Pages/VendorSignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },

  //landing page route
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/user-sign-up",
    element: <UserSignUp></UserSignUp>,
  },
  {
    path: "/vendor-sign-up",
    element: <VendorSignUp></VendorSignUp>,
  },
]);

export default router;
