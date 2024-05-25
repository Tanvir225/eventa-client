import { Outlet } from "react-router-dom";
import AdminSidebar from "../Component/Dashboard/AdminSidebar/AdminSidebar";
import UserSidebar from "../Component/Dashboard/UserSidebar/UserSidebar";
import useAdmin from "../Hook/useAdmin";

const Dashboard = () => {
  //TODO
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <section className="grid grid-cols-12 gap-5">
      <div className="hidden lg:block lg:col-span-2 bg-indigo-600 h-screen p-7">
        {isAdmin ? <AdminSidebar></AdminSidebar> : <UserSidebar></UserSidebar>}
      </div>
      <div className="col-span-full lg:col-span-10 p-1 lg:p-7">
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Dashboard;
