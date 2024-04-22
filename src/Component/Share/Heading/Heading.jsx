/* eslint-disable react/prop-types */
import label from "../../../assets/label-3.png"
const Heading = ({heading,subHeading}) => {
  return (
    <div className="space-y-3  my-12 py-3 w-[85%] md:w-[65%] lg:w-[50%]  mx-auto">
      <h1 className="text-2xl font-bold text-[#FF69B4] text-center">
        {heading}
      </h1>
      
      <p className="text-lg font-semibold text-[#808080] text-center">
        {subHeading}
      </p>
      <img src={label} alt="label" />
    </div>
  );
};


export default Heading;

