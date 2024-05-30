import { Outlet } from "react-router-dom";
import AdminSidebar from "../Component/Dashboard/AdminSidebar/AdminSidebar";
import UserSidebar from "../Component/Dashboard/UserSidebar/UserSidebar";
import SharedSidebar from "../Component/Dashboard/SharedSidebar/SharedSidebar";

import VendorSidebar from "../Component/Dashboard/VendorSidebar.jsx/VendorSidebar";
import useUserRole from "../Hook/useUserRole";

const Dashboard = () => {

  //useUserRole hook call
  const [roleDate] = useUserRole()
  const {isAdmin,isVendor,isVendorSatus} = roleDate || {}

  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="hidden lg:block lg:col-span-2 bg-indigo-600 h-screen p-7">
        {isAdmin ? <AdminSidebar></AdminSidebar> : isVendor ? <VendorSidebar></VendorSidebar> : <UserSidebar></UserSidebar>}
        <div className="divider divider-info"></div>
        <SharedSidebar></SharedSidebar>
      </div>
      <div className="col-span-full lg:col-span-10 p-1 lg:p-7">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Dashboard;
