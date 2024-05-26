import { AiOutlineHome } from "react-icons/ai";
import { FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="space-y-5 text-white">
      <NavLink
        to={"/dashboard"}
        className={"flex items-center gap-2 justify-center"}
      >
        <AiOutlineHome className="text-2xl"></AiOutlineHome>User
      </NavLink>
      <NavLink
        to={"my-booking"}
        className={"flex items-center gap-2 justify-center"}
      >
        <FaBook className="text-2xl"></FaBook>My Booking
      </NavLink>
    </div>
  );
};

export default UserSidebar;
