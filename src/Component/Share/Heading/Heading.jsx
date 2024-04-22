/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import label from "../../../assets/label-3.png"
const Heading = ({ text, seeAll }) => {
  return (
    <div className="flex items-center justify-between my-10">
      <h2 className="font-bold text-2xl lg:text-3xl text-neutral-600 border-b-4 border-sky-300  py-5 border-dashed  lg:w-[16%]">{text}</h2>
      {
        seeAll ? <Link to={"/"} className="text-center font-semibold text-white px-4 py-1 rounded-lg hover:bg-black bg-sky-500">{seeAll}</Link> : ""
      }
    </div>
  );
};


export default Heading;

