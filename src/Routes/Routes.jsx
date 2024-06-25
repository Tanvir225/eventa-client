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
import ResetPass from "../Pages/Landing/ResetPass";
import Dashboard from "../Layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Users from "../Pages/Dashboard/Admin/Users";
import UserHome from "../Pages/Dashboard/User/UserHome";
import MyBooking from "../Pages/Dashboard/User/MyBooking";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import AdminRoute from "./AdminRoute";
import VendorHome from "../Pages/Dashboard/Vendor/VendorHome";
import VendorRoute from "./VendorRoute";
import VendorUpdateProfile from "../Pages/Dashboard/Vendor/VendorUpdateProfile";


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
      {
        path: "/reset-password",
        element: <ResetPass></ResetPass>,
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

  //dashboard route
  {
    path:'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      //users route
      {
        path: "/dashboard",
        element: <UserHome></UserHome>
      },
      {
        path: "my-booking",
        element: <MyBooking></MyBooking>
      },


      //admin route
      {
        path: "admin-home",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "users",
        element: <AdminRoute><Users></Users></AdminRoute>
      },



      //vendor route
      {
        path:"vendor-home",
        element: <VendorRoute><VendorHome></VendorHome></VendorRoute>
      },
      {
        path:"update-profile",
        element: <VendorRoute><VendorUpdateProfile></VendorUpdateProfile></VendorRoute>
      },
    ]
  }
]);

export default router;
