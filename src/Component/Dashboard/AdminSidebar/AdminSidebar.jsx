import { AiOutlineHome } from "react-icons/ai";
import {  FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css"

const AdminSidebar = () => {

    return (
        <div className="space-y-5 text-white">
            <NavLink to={"admin-home"} className={"flex items-center gap-2 justify-center"}>
                <AiOutlineHome className="text-2xl"></AiOutlineHome>Home
            </NavLink>
            <NavLink to={"users"} className={"flex items-center gap-2 justify-center"}>
                <FaUser className="text-2xl"></FaUser>Users
            </NavLink>
        </div>
    );
};

export default AdminSidebar;