import { Link, Outlet } from "react-router-dom";
import AdminSidebar from "../Component/Dashboard/AdminSidebar/AdminSidebar";
import UserSidebar from "../Component/Dashboard/UserSidebar/UserSidebar";
import SharedSidebar from "../Component/Dashboard/SharedSidebar/SharedSidebar";

import VendorSidebar from "../Component/Dashboard/VendorSidebar.jsx/VendorSidebar";
import useUserRole from "../Hook/useUserRole";
import { FaAlignLeft } from "react-icons/fa";
import { useState } from "react";
import Drawer from "react-modern-drawer";

const Dashboard = () => {
  //useUserRole hook call
  const {roleData} = useUserRole();

  //drawer state
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <section className="xl:max-w-7xl xl:mx-auto">
      {/* menu in mobile device */}
      <div className={`lg:hidden flex justify-between sicky z-20 text-white p-3 bg-indigo-500 ${roleData?.isVendorSatus && 'hidden'}`}>
        <p>logo</p>
        <button
          className="flex items-center gap-2 justify-center lg:hidden "
          onClick={toggleDrawer}
        >
          <FaAlignLeft></FaAlignLeft> Menu
        </button>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="overflow-y-auto"
      >
        <div className="px-2">
          <div className="border-b-2 py-2  flex flex-row-reverse justify-between  items-center bg-base-100">
            <button
              onClick={toggleDrawer}
              className="btn btn-sm bg-red-600 hover:bg-black text-white "
            >
              close
            </button>
          </div>
          <div className="bg-indigo-600 h-screen py-5">
            {roleData?.isAdmin ? (
              <AdminSidebar></AdminSidebar>
            ) : roleData?.isVendor ? (
              <VendorSidebar></VendorSidebar>
            ) : (
              <UserSidebar></UserSidebar>
            )}
            <div className="divider divider-info"></div>
            <SharedSidebar></SharedSidebar>
          </div>
        </div>
      </Drawer>
      {/* menu in mobile device */}

      <div className="grid grid-cols-12 gap-5">
        <div
          className={`hidden lg:col-span-2 bg-indigo-600 h-screen p-7 lg:${
            roleData?.isVendorSatus ? "hidden" : "block"
          }`}
        >
          {roleData?.isAdmin ? (
            <AdminSidebar></AdminSidebar>
          ) : roleData?.isVendor ? (
            <VendorSidebar></VendorSidebar>
          ) : (
            <UserSidebar></UserSidebar>
          )}
          <div className="divider divider-info"></div>
          <SharedSidebar></SharedSidebar>
        </div>
        <div
          className={`col-span-full p-7 lg:${roleData?.isVendorSatus && "col-span-full"} lg:col-span-10`}
        >
          {roleData?.isVendorSatus ? (
            <p className="text-center text-3xl flex flex-col items-center justify-center h-screen">
              ❌<br /> <br /> Wait for Admin Confirmation! <br />{" "}
              <Link
                to={"/"}
                className="btn btn-outline bg-indigo-600 text-white mt-5"
              >
                Go Home
              </Link>
            </p>
          ) : (
            <Outlet></Outlet>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
