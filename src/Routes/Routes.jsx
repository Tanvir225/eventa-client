import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Landing/Login";
import UserSignUp from "../Pages/Landing/UserSignUp";
import VendorSignUp from "../Pages/Landing/VendorSignUp";
import ErrorPage from "../Pages/Landing/ErrorPage";
import About from "../Pages/About/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
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
