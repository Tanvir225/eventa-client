import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import animation from "../../assets/landing_animation.json";
import Lottie from "lottie-react";
import useAuth from "../../Hook/useAuth";
import ImageUpload from "../../Utils/ImageUpload";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { ClockLoader } from "react-spinners";
import usePublicAxios from "../../Hook/usePublicAxios";
import useVendorArea from "../../Hook/useVendorArea";
import useVendorType from "../../Hook/useVendorType";
const VendorSignUp = () => {
  //state
  const [showPassword, setIsShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenArea, setIsOpenArea] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select vendor type");
  const [Loading, setLoading] = useState(false);
  const [selectArea, setSelectArea] = useState("Please select your area!");

  //useVendorArea hook calling
  const [area] = useVendorArea();

  //useVendorType hook calling
  const [options] = useVendorType();

  //useAuth hook call
  const { signUp } = useAuth();

  //usePublicAxios calling
  const axios = usePublicAxios();

  //password  visibility toggle
  const handlePasswordShow = () => {
    setIsShowPassword(!showPassword);
  };

  //navigate
  const navigate = useNavigate();

  //user-sign-up functionality
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const phone = data?.phone;
    const password = data?.password;

    //password checker
    if (data?.password?.length < 6) {
      toast.error("Password at least 6 characters");
      return;
    }

    //image Upload
    const imageFile = { image: data?.image[0] };

    try {
      setLoading(true);
      const imgHosting = await ImageUpload({ imageFile: imageFile });
      console.log(imgHosting.result?.data);
      setLoading(false);

      //user signup
      const signVendor = await signUp(email, password);
      const vendor = signVendor.user;
      console.log(vendor);

      //update profile
      await updateProfile(vendor, {
        displayName: name,
        photoURL: imgHosting?.result?.data?.data?.display_url,
      });

      //sava user into database
      const userInfo = {
        name: name,
        email: email,
        phone: phone,
        vendor: selectedValue,
        password: password,
        area: selectArea,
        photoURL: imgHosting?.result?.data?.data?.display_url,
        createdAt: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Dhaka",
        }),
        status: "pending",
      };

      axios.post("/users", userInfo).then((result) => {
        console.log(result);
      });

      toast.success("Account has been created");
      reset();
      navigate("/");
    } catch (error) {
      console.log("Error in Image upload", error);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center space-y-3 bg-base-100 p-5 md:p-2">
      <div className="flex justify-between w-[90%] lg:w-[80%]  items-center">
        <Link to={"/"} className="  text-black flex items-center gap-2">
          <FaArrowLeft size={26} className=""></FaArrowLeft> go home
        </Link>
        <p>logo</p>
      </div>
      <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[100%] md:w-[80%] lg:h-screen">
        {/* register design side  */}
        <div className="relative hidden h-full items-center justify-center bg-indigo-400 md:flex md:w-[60%] lg:w-[40%]">
          <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#60b5fa] to-[#6585dd]"></div>
          <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#60b5fa] to-[#6585dd] transition-all"></div>
          <div className="absolute  left-[20%] top-6 h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#60b5fa] to-[#6585dd] transition-all"></div>
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
          <h2 className="pb-8 text-center text-3xl font-bold text-indigo-600">
            Vendor Sign up
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex  w-full flex-col items-center justify-center gap-4"
          >
            <input
              className="w-[80%] rounded-lg border border-indigo-400 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="text"
              placeholder="Name"
              {...register("name")}
              required
            />

            <input
              className="w-[80%] rounded-lg border border-indigo-400 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="tel"
              placeholder="Phone"
              {...register("phone")}
              required
            />

            {/* dropdown for vendor type - btn */}
            <div className="w-[80%] md:w-[60%]  relative">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className=" flex  items-center justify-between rounded-xl px-6 py-2 bg-white border  border-indigo-400"
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
                    ? "visible top-7 bg-base-100 overflow-y-auto h-60 border-2 border-indigo-400"
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
                    className="px-6 py-2 text-gray-800 z-20 bg-slate-50 hover:bg-indigo-400 hover:text-white"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>

            {/* dropdown for vendor area - btn */}
            <div className="w-[80%] md:w-[60%]  relative">
              <div
                onClick={() => setIsOpenArea(!isOpenArea)}
                className=" flex  items-center justify-between rounded-xl px-6 py-2 bg-white border  border-indigo-400"
              >
                <h1 className=" text-gray-600">{selectArea}</h1>
                <svg
                  className={`${
                    isOpenArea ? "-rotate-180" : "rotate-0"
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
                  isOpenArea
                    ? "visible top-7 bg-base-100 border-2 overflow-y-auto h-60 border-indigo-400"
                    : "hidden -top-4 opacity-0"
                } absolute z-20 mx-auto my-4 w-full rounded-xl py-4 border duration-500`}
              >
                {area?.map((option, idx) => (
                  <div
                    key={idx}
                    onClick={(e) => {
                      setSelectArea(e.target.textContent);
                      setIsOpenArea(false);
                    }}
                    className="px-6  py-2 text-gray-800 z-20 bg-slate-50 hover:bg-indigo-400 hover:text-white"
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>

            <input
              className="w-[80%] rounded-lg border border-indigo-400 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="email"
              placeholder="Email"
              {...register("email")}
              required
            />
            <div className="w-full text-center relative">
              <input
                className="w-[80%]  rounded-lg border border-indigo-400 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
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
              className="w-[80%] text-gray-400 rounded-lg border border-indigo-400 px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="file"
              placeholder="image"
              name="image"
              {...register("image")}
              required
            />
            <p className="text-[14px] text-gray-400">
              Already have an account ?{" "}
              <Link
                to={"/login"}
                className="text-indigo-600 font-bold underline "
              >
                Login
              </Link>
            </p>
            <button
              className="w-[80%] flex justify-center items-center rounded-lg bg-indigo-600 hover:bg-sky-600 px-6 py-2 font-medium text-white md:w-[60%]"
              type="submit"
            >
              {Loading ? (
                <ClockLoader size={30} color="white"></ClockLoader>
              ) : (
                "Signup"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorSignUp;
