import { useQuery } from "@tanstack/react-query";
import swal from "sweetalert";
import useAxios from "../../../Hook/useAxios";

const Users = () => {
  //useAxios call
  const axios = useAxios();

  //ten-stack query
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axios.get("/users");
      return result.data;
    },
  });

  //handleMakeAdmin functionality
  const handleMakeAdmin = (user) => {
    swal({
      title: "Are you sure?",
      text: "Once Make Admin, you will not be able to undo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .patch(`/users/${user?.email}`, { role: "admin" })
          .then((result) => {
            console.log(result.data);
            if (result?.data?.modifiedCount > 0) {
              swal(`${user?.name}! you are now admin`, {
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  //handleMakeVendor
  const handleMakeVendor = (user) => {
    swal({
      title: "Are you sure?",
      text: "Once Make vendor, you will not be able to undo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .patch(`/users/${user?.email}`, { role: "vendor",  status: "ok" })

          .then((result) => {
            console.log(result.data);
            if (result?.data?.modifiedCount > 0) {
              swal(`${user?.name}! you are now vendor`, {
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
  };

  //handleDelete functionality
  const handleDelete = (user) => {
    swal({
      title: "Are you sure?",
      text: "Once You Delete, you will not be able to undo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/users/${user?.email}`).then((result) => {
          console.log(result.data);
          if (result?.data?.deletedCount > 0) {
            swal(`${user?.name}! is deleted`, {
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border border-gray-200 bg-white shadow-lg text-center">
        {/* Table Header */}
        <thead>
          <tr className="h-[70px] border-b bg-blue-600 text-[#FFFFFF]">
            <th className="px-6 py-4  ">SL</th>
            <th className="px-6 py-4 ">User</th>
            <th className="px-6 py-4 ">Name</th>
            <th className="px-6 py-4 ">Email</th>
            <th className="px-6 py-4 ">Role</th>
            <th className="px-6 py-4 ">Vendor</th>
            <th className="px-6 py-4 ">Status</th>
            <th className="px-6 py-4 ">
              Make <br />
              Admin
            </th>
            <th className="px-6 py-4 ">
              Last <br /> Login
            </th>
            <th className="px-6 py-4 ">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows */}
          {users?.map((user, index) => (
            <tr
              className="h-[70px] border-b bg-indigo-500 text-[#FFFFFF]"
              key={user._id}
            >
              <td>{index + 1}</td>
              <td>
                <div className="flex justify-center items-center">
                  <img
                    className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover"
                    src={user.photoURL}
                  />
                </div>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user?.vendor ? user?.vendor : "...."}</td>
              <td>
                {user?.status === "pending" ? (
                  <button
                    onClick={() => handleMakeVendor(user)}
                    className="bg-red-600 btn-sm btn text-white hover:bg-black"
                  >
                    Approved
                  </button>
                ) : (
                  "ok"
                )}
              </td>

              <td>
                {user?.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="bg-green-500 btn-sm btn text-white hover:bg-black"
                  >
                    Admin
                  </button>
                )}
              </td>
              <td>
                {user?.lastLogin
                  ? new Date(user?.lastLogin).toLocaleString("en-US", {
                      timeZone: "Asia/Dhaka",
                    })
                  : "Signup once"}
              </td>
              <td>
                <button
                  onClick={() => handleDelete(user)}
                  className="btn btn-sm bg-red-600 hover:bg-black text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
