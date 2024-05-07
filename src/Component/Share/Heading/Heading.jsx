/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Heading = ({ text, seeAll, subHeading }) => {
  return (
    <div className="flex items-center justify-between flex-wrap my-4 md:my-10 space-y-3 md:space-y-5">
      <h2 className="font-bold text-base lg:text-2xl text-indigo-700 border-b-4 border-indigo-200  py-5 border-dashed">{text}</h2>
      <div>
        {
          subHeading ? <p className="text-[#66042D] font-semibold text-base md:text-lg">{subHeading}</p> : ""
        }

        {
          seeAll ? <Link to={"/"} className="text-center font-semibold text-white px-4 py-1 rounded-lg hover:bg-black bg-gradient-to-r from-[#9fccfa] to-[#0974f1]">{seeAll}</Link> : ""
        }
      </div>
    </div>
  );
};


export default Heading;

