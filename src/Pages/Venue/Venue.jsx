import { useState } from "react";
import Banner_1 from "../../Component/Share/Banner_1/Banner_1";
import Filter from "./Filter";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoFilterOutline } from "react-icons/io5";
import { FaSortDown } from "react-icons/fa";
import Card from "../../Component/Share/Card/Card";
import Pagination from "../../Component/Share/Pagination/Pagination";

const Venue = () => {
  //drawer state
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="">
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
      <div className="flex justify-end px-5 my-7 py-2 sticky top-24 z-20 bg-base-100">
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
        className="overflow-y-auto"
      >
        <div className="border-b-2 py-2 px-7 flex flex-row-reverse justify-between items-center sticky top-0 bg-base-100">
          <button
            onClick={toggleDrawer}
            className="btn btn-sm bg-red-600 hover:bg-black text-white "
          >
            close
          </button>

          <p className="text-green-800 flex items-center gap-2">Scroll down <FaSortDown></FaSortDown></p>
        </div>

        <div className="px-7 py-5">
          <Filter display={true} heading="No of guest"></Filter>
          <Filter display={true} heading="Event type"></Filter>
          <Filter display={true} heading="Location"></Filter>
          <Filter display={true} heading="price"></Filter>
          <button className="btn btn-outline bg-sky-500 text-white px-7">Search</button>
        </div>
      </Drawer>



      {/* All venue */}
      <section className="px-5 grid grid-cols-1 lg:grid-cols-3 gap-5 xl:grid-cols-4">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      
      </section>
      <Pagination></Pagination>
    </div>
  );
};

export default Venue;
