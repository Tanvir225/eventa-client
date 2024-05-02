import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const Card = () => {
  return (
    <div className=" bg-white my-5 p-5 shadow-md rounded-2xl space-y-5 group">
      {/* profile image & bg  */}
      <div className="relative">
        <img
          className="w-full h-[30vh] rounded-2xl bg-gray-500 group-hover:scale-110 duration-300 delay-200"
          src="https://img.freepik.com/free-psd/3d-rendering-royal-room-illustration_23-2150185815.jpg?t=st=1709815614~exp=1709819214~hmac=1510c1c37623a23b434bea0351199a3a51aec9ed3b3ac104673fb2e380b8a973&w=740"
          alt="card navigate ui"
        />
        <img
          className="w-[80px] h-[80px] group-hover:scale-75 duration-300 absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-gray-400 border border-white"
          src="https://source.unsplash.com/100x100/?men"
          alt="card navigate ui"
        />
      </div>
      {/* profile name & role */}
      <div className="pt-8 text-center space-y-1">
        <h1 className="text-xl md:text-2xl">Tolarbagh Convention Hall</h1>
        <Link to={'https://maps.app.goo.gl/7dHRhmopQbzj8qmn7'} className="text-[#FF69B4] font-semibold hover:text-gray-400 text-sm">
          <p className="flex justify-center items-center gap-2 py-2">
            <FaLocationArrow></FaLocationArrow>View Live Location
          </p>
        </Link>
      </div>
      {/* post , followers following  */}
      <div className="flex flex-wrap px-4 gap-5  md:px-8 justify-between items-center">
        <div className="text-center">
          <h5 className="font-medium  text-xl">500 persons</h5>
          <p className="text-sm  text-[#FF69B4]">Capacity</p>
        </div>
        <div className="text-center">
          <h5 className="font-medium text-xl">10k</h5>
          <p className="text-sm  text-[#FF69B4]">Hall Cost</p>
        </div>
        <div className="text-center">
          <h5 className="font-medium text-xl">1 day ago</h5>
          <p className="text-sm  text-[#FF1493]">Last Booking</p>
        </div>
        <button className="bg-gradient-to-r from-[#9fccfa] to-[#0974f1] hover:scale-95 font-medium  w-full py-2 rounded-full hover:shadow-xl   text-white shadow-[0px_0px_10px_#E2DADA] t duration-500">
          View Profile
        </button>
      </div>
    </div>
  );
};



export default Card;
