/* eslint-disable react/prop-types */
import { useState } from "react";

const Select = ({options,title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(title);

  // array of options
  //   const options = ["Apple", "banana", "chips"];

  return (
    <div className="">
      {/* dropdown - btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-40 md:w-80  items-center justify-between rounded-xl bg-white px-5 py-2 border"
      >
        <h1 className=" text-gray-600">{selectedValue}</h1>
        <svg
          className={`${isOpen ? "-rotate-180" : "rotate-0"} duration-300`}
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
          isOpen ? "visible top-0 opacity-100 h-28 md:h-40 overflow-y-auto" : "hidden -top-4 opacity-0"
        } relative mx-auto my-2  rounded-xl p-2 border duration-300`}
      >
        {options?.map((option, idx) => (
          <div
            key={idx}
            onClick={(e) => {
              setSelectedValue(e.target.textContent);
              setIsOpen(false);
            }}
            className="px-6 py-2 text-gray-200 hover:bg-gray-100 hover:rounded-lg hover:text-neutral-900"
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
