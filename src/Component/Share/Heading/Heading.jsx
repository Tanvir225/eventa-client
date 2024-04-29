/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import label from "../../../assets/label-3.png"
const Heading = ({ text, seeAll, subHeading }) => {
  return (
    <div className="flex items-center justify-between flex-wrap my-10 space-y-5">
      <h2 className="font-bold text-xl lg:text-2xl text-neutral-600 border-b-4 border-sky-300  py-5 border-dashed">{text}</h2>
      <div>
        {
          subHeading ? <p className="text-[#66042D] font-semibold text-lg">{subHeading}</p> : ""
        }

        {
          seeAll ? <Link to={"/"} className="text-center font-semibold text-white px-4 py-1 rounded-lg hover:bg-black bg-sky-500">{seeAll}</Link> : ""
        }
      </div>
    </div>
  );
};


export default Heading;

