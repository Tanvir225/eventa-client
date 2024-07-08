import { useEffect, useState } from "react";
import useVendorArea from "../../../Hook/useVendorArea";
import usePublicAxios from "../../../Hook/usePublicAxios";
import Select from "react-select";
import { useForm } from "react-hook-form";
import ImageUpload from "../../../Utils/ImageUpload";

const HallVendorProfileForm = ({ vendorName,vendorEmail }) => {
  const [isOpenArea, setIsOpenArea] = useState(false);
  const [selectArea, setSelectArea] = useState("Please select your area!");
  const [facalities, seFacalities] = useState([]);
  const [selectedFacalities, setSelectedFacalities] = useState([]);

  //useVendorArea hook calling
  const [area] = useVendorArea();
  //axios hook calling
  const axios = usePublicAxios();

  //useEffect for facalities
  useEffect(() => {
    const getFacalities = async () => {
      const response = await axios.get("/hall-facalities");
      return seFacalities(response?.data);
    };

    getFacalities();
  }, [axios]);

  //get facalitied
  const handleChangeFacalities = async(selectedFacalities)=>{
    setSelectedFacalities(selectedFacalities)
  }

  
  //user-sign-up functionality
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async(data)=>{
    const name = data?.name
    const live_location = data?.live_location
    const description = data?.description
    const capacity = data?.capacity
    const hall_cost = data?.hall_cost
    const terms_condition = data?.terms_condition
    
    //image upoload
     const imageFile = { image: data?.image[0] };
     console.log(imageFile);
    try{
      const imageHost = await ImageUpload({imageFile:imageFile})
      console.log(imageHost?.result?.data);

      //path vendor data into databse
      const vendorUpdate = {
        vendor_name:vendorName,
        vendor_email:vendorEmail,
        name: name,
        business_thumbnail: imageHost?.result?.data?.data?.display_url,
        live_location:live_location,
        location:selectArea,
        capacity:capacity,
        hall_cost:hall_cost,
        facalities:selectedFacalities,
        description:description,
        terms_condition:terms_condition,

      }
    } catch(error){
      console.log(error)
    }


    reset()


  }



  return (
    <div className="my-5">
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="input input-bordered flex items-center gap-2">
            Vendor Name
            <input
              type="text"
              className="grow text-indigo-700"
              defaultValue={vendorName}
              disabled
              {...register('vendor_name')}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Business Name
            <input
              type="text"
              className="grow text-indigo-700"
              placeholder="Xin Xian"
              {...register("name")}
              required
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="input input-bordered flex items-center gap-2">
            Live Location
            <input
              type="text"
              className="grow text-indigo-700"
              placeholder="map location"
              {...register("live_location")}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Hall Cost
            <input
              type="number"
              className="grow text-indigo-700"
              placeholder="15000"
              {...register("hall_cost")}
              required
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* dropdown for vendor area - btn */}
          <div className=" relative">
            <div
              onClick={() => setIsOpenArea(!isOpenArea)}
              className=" flex  items-center justify-between rounded-xl px-6 py-2 bg-white border  "
            >
              <h1 className=" text-gray-600">{selectArea}</h1>
              <svg
                className={`${
                  isOpenArea ? "-rotate-180" : "rotate-0"
                } duration-300`}
                width={30}
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
          <label className="input input-bordered flex items-center gap-2">
            Capacity
            <input
              type="number"
              className="grow text-indigo-700"
              placeholder="500"
              {...register("capacity")}
              required
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="">
            Business Thumnail
            <input
              type="file"
              className="file-input file-input-bordered mt-1 file-input-ghost  w-full"
              name="image"
              {...register("image")}
              required
            />
          </label>
          <label className="">
            Choose Facalities
            <Select className="mt-1 p-1" isMulti options={facalities} onChange={handleChangeFacalities} required ></Select>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <textarea
            className="textarea textarea-bordered text-indigo-700"
            placeholder="type your description here"
            rows={5}
            {...register("description")}
            required
          ></textarea>
          <textarea
            className="textarea textarea-bordered text-indigo-700"
            placeholder="terms and condition"
            rows={5}
            {...register("terms_condition")}
          ></textarea>
        </div>

        <div className="text-center">
          <button className="btn btn-outline bg-indigo-600 text-white w-52" type="submit">Update Profile</button>
        </div>
      </form>
    </div>
  );
};

export default HallVendorProfileForm;
