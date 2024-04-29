// eslint-disable-next-line react/prop-types
const Filter = ({heading}) => {
  return (
    <div className="hiden lg:block my-16">
      <select className="select select-info w-full ">
        <option disabled selected>
          {heading}
        </option>
        <option>English</option>
        <option>Japanese</option>
        <option>Italian</option>
      </select>
    </div>
  );
};

export default Filter;
