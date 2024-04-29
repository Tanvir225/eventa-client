import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Landing/Login";
import UserSignUp from "../Pages/Landing/UserSignUp";
import VendorSignUp from "../Pages/Landing/VendorSignUp";
import ErrorPage from "../Pages/Landing/ErrorPage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Media from "../Pages/Media/Media";
import Vendors from "../Pages/Vendors/Vendors";
import Venue from "../Pages/Venue/Venue";


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
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
      {
        path: "/vendors",
        element: <Vendors></Vendors>,
      },
      {
        path: "/venue",
        element: <Venue></Venue>,
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
