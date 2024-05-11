import { useState } from "react";

/* eslint-disable react/prop-types */
const Select = ({ options, title }) => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="w-full px-5">
      <input type="text" list="select" onSelect={(e)=>setValue(e.target.value)} placeholder={`${title}`} className="w-full lg:w-[350px] input input-info" />
      <datalist id="select" className="">
        {options &&
          options.length > 0 &&
          options.map((opt, i) => <option key={i} value={opt}></option>)}
      </datalist>
    </div>
  );
};

export default Select;
