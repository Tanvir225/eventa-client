const VendorProfileForm = ({vendorName}) => {
  return (
    <div className="my-5">
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="input input-bordered flex items-center gap-2">
            Vendor Name
            <input type="text" className="grow text-indigo-700" defaultValue={vendorName}  disabled />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Business Name
            <input type="text" className="grow text-indigo-700" placeholder="Xin Xian" />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="input input-bordered flex items-center gap-2">
            Live Location
            <input type="text" className="grow text-indigo-700" placeholder="map location" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Hall Cost
            <input type="number" className="grow text-indigo-700" placeholder="15000" />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <label className="input input-bordered flex items-center gap-2">
            Location
            <input type="text" className="grow text-indigo-700" placeholder="mirpur" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Capacity
            <input type="number" className="grow text-indigo-700" placeholder="500" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default VendorProfileForm;
