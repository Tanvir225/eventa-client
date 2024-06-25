import useAuth from "../../../Hook/useAuth";
import useUserRole from "../../../Hook/useUserRole";

const VendorUpdateProfile = () => {
  //useAuth hook calling
  const { user } = useAuth();

  //useUserRole jsx 
  const {roleData} = useUserRole()
  console.log(roleData?.vendorType);
  return (
    <div>
      <h2 className="text-xl font-bold">
        Hey! <span className="text-blue-600">{`${user?.displayName}`}</span>{" "}
        update your profile
      </h2>

      <form action="">
        
      </form>
    </div>
  );
};

export default VendorUpdateProfile;
