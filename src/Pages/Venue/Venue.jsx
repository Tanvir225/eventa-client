import { useState } from "react";
import Banner_1 from "../../Component/Share/Banner_1/Banner_1";
import Filter from "./Filter";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoFilterOutline } from "react-icons/io5";
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
      <div className="px-5 w-full flex justify-center items-center gap-7">
        <Filter heading="No og Guest"></Filter>
        <Filter heading="Event Type"></Filter>
        <Filter heading="Location"></Filter>
        <Filter heading="price"></Filter>
        <button className="btn btn-outline hidden lg:block bg-sky-500 px-7 text-white">
          Search
        </button>
      </div>

      {/* filter in mobile device */}
      <div className="flex justify-end px-5 my-4 py-2 sticky top-24 z-20 bg-base-100">
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
        direction="right"
        className="overflow-y-auto"
      >
        <div className="px-2">
          <div className="border-b-2 py-2  flex flex-row-reverse justify-between mt-28 items-center bg-base-100">
            <button
              onClick={toggleDrawer}
              className="btn btn-sm bg-red-600 hover:bg-black text-white "
            >
              close
            </button>
          </div>
          <Filter display={true} heading="No of guest"></Filter>
          <Filter display={true} heading="Event type"></Filter>
          <Filter display={true} heading="Location"></Filter>
          <Filter display={true} heading="price"></Filter>
          <button className="btn btn-outline bg-sky-500 text-white px-7">
            Search
          </button>
        </div>
      </Drawer>

      {/* All venue */}
      <section
        className="px-3 grid grid-cols-1 lg:grid-cols-3
      
      
      gap-5 "
      >
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
