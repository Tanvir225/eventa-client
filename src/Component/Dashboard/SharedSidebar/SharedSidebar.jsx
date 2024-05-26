import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SharedSidebar = () => {
  return (
    <div className="space-y-5 text-white">
      <NavLink to={"/"} className={"flex items-center gap-2 justify-center"}>
        <AiOutlineHome className="text-2xl"></AiOutlineHome>Home
      </NavLink>
      <NavLink
        to={"/venue"}
        className={"flex items-center gap-2 justify-center"}
      >
        <BiCategory className="text-2xl"></BiCategory>Venue
      </NavLink>
      <NavLink
        to={"/vendors"}
        className={"flex items-center gap-2 justify-center"}
      >
        <MdOutlineConnectWithoutContact className="text-2xl"></MdOutlineConnectWithoutContact>Vendors
      </NavLink>
    </div>
  );
};

export default SharedSidebar;
