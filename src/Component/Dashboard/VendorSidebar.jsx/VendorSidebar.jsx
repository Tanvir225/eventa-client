import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";


const VendorSidebar = () => {
    return (
        <div className="space-y-5 text-white">
      <NavLink
        to={"vendor-home"}
        className={"flex items-center gap-2 justify-center"}
      >
        <AiOutlineHome className="text-2xl"></AiOutlineHome>Vendor
      </NavLink>
     
    </div>
    );
};

export default VendorSidebar;