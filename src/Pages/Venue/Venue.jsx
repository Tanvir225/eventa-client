import { useState } from "react";
import Banner_1 from "../../Component/Share/Banner_1/Banner_1";
import Filter from "./Filter";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoFilterOutline } from "react-icons/io5";

const Venue = () => {
  //drawer state
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <Banner_1 heading="We are Eventa" text="Manage your wedding"></Banner_1>
      <div className="px-7 w-full flex justify-center items-center gap-7">
        <Filter heading="No og Guest"></Filter>
        <Filter heading="Event Type"></Filter>
        <Filter heading="Location"></Filter>
        <Filter heading="price"></Filter>
        <button className="btn btn-outline hidden lg:block bg-sky-500 px-7 text-white">
          Search
        </button>
      </div>

      {/* filter in mobile device */}
      <div className="flex justify-end px-7 my-10">
        <button
          className="btn  btn-outline  flex items-center gap-2 justify-center lg:hidden "
          onClick={toggleDrawer}
        >
          <IoFilterOutline></IoFilterOutline> Filter by
        </button>
      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        className=""
      >
        <div className="border-b-2 py-2 px-7 text-right">
          <button
            onClick={toggleDrawer}
            className="btn btn-sm bg-red-600 text-white "
          >
            close
          </button>
        </div>
        
      </Drawer>
    </div>
  );
};

export default Venue;
