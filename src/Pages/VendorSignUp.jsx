import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import animation from "../assets/landing_animation.json";
import Lottie from "lottie-react";
const VendorSignUp = () => {
  //state
  const [showPassword, setIsShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select vendor type");

  // array of options  for select dropdown
  const options = ["Convention Hall", "Car", "Flower", "Photographer"];

  //password  visibility toggle
  const handlePasswordShow = () => {
    setIsShowPassword(!showPassword);
  };

  //user-sign-up functionality
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    data.vendor = selectedValue;
    console.log(data);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center space-y-5 bg-base-100 p-5 md:p-5">
      <div className="flex justify-between w-[90%] lg:w-[80%]  items-center">
        <Link to={"/"} className="btn  text-black flex items-center gap-2">
          <FaArrowLeft size={26} className=""></FaArrowLeft> go home
        </Link>
        <p>logo</p>
      </div>
      <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[100%] md:w-[80%] lg:h-[100%]">
        {/* register design side  */}
        <div className="relative hidden h-full items-center justify-center bg-sky-400 md:flex md:w-[60%] lg:w-[40%]">
        <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#60b5fa] to-[#6585dd]"></div>
          <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#60b5fa] to-[#6585dd] transition-all"></div>
          <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#60b5fa] to-[#6585dd]"></div>
          <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#60b5fa] to-[#6585dd]"></div>
          <div className="space-y-2 text-center mt-16">
            <h2 className="text-3xl font-medium text-white/80 ">
              Welcome Back
            </h2>
            <p className="animate-bounce text-2xl font-bold text-white/60">
              Eventa
            </p>
            <Lottie animationData={animation} className="h-24"></Lottie>
          </div>
        </div>
        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
          <h2 className="pb-8 text-center text-3xl font-bold text-[#FF69B4]">
            Vendor Sign up
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex  w-full flex-col items-center justify-center gap-4"
          >
            <input
              className="w-[80%] rounded-lg border border-[#FF69B4] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="text"
              placeholder="Name"
              {...register("name")}
              required
            />
            
            <input
              className="w-[80%] rounded-lg border border-[#FF69B4] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="tel"
              placeholder="Phone"
              {...register("phone")}
              required
            />

            {/* dropdown - btn */}
            <div className="w-[80%] md:w-[60%]  relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className=" flex  items-center justify-between rounded-xl px-6 py-2 bg-white border  border-[#FF69B4]"
              >
                <h1 className=" text-gray-600">{selectedValue}</h1>
                <svg
                  className={`${
                    isOpen ? "-rotate-180" : "rotate-0"
                  } duration-300`}
                  width={25}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#4B5563"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>

              {/* dropdown - options  */}
              <div
                className={`${
                  isOpen
                    ? "visible top-7 bg-base-100 border-2 border-[#FF69B4]"
                    : "hidden -top-4 opacity-0"
                } absolute z-20 mx-auto my-4 w-full rounded-xl py-4 border duration-500`}
              >
                {options?.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      setSelectedValue(e.target.textContent);
                      setIsOpen(false);
                    }}
                    className="px-6 py-2 text-gray-800 z-20 bg-slate-50 hover:bg-[#FF69B4] hover:text-white"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>

            <input
              className="w-[80%] rounded-lg border border-[#FF69B4] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            />
            <div className="w-full text-center relative">
              <input
                className="w-[80%]  rounded-lg border border-[#FF69B4] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                name="password"
                {...register("password")}
                required
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={handlePasswordShow}
                  className="absolute top-[35%] right-[15%] md:right-[22%]"
                ></FaEyeSlash>
              ) : (
                <FaEye
                  onClick={handlePasswordShow}
                  className="absolute top-[35%] right-[15%] md:right-[22%]"
                ></FaEye>
              )}
            </div>

            <input
              className="w-[80%] text-gray-400 rounded-lg border border-[#FF69B4] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="file"
              placeholder="profile"
              name="profile"
              {...register("profile")}
              required
            />
            <p className="text-[14px] text-gray-400">
              Already have an account ?{" "}
              <Link
                to={"/login"}
                className="text-[#FF69B4] font-bold underline "
              >
                Login
              </Link>
            </p>
            <button
              className="w-[80%] rounded-lg bg-[#FF69B4] hover:bg-sky-600 px-6 py-2 font-medium text-white md:w-[60%]"
              type="submit"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorSignUp;
