import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../../Hook/usePublicAxios";


const Users = () => {

    //publicAxios call
    const axios = usePublicAxios()

    //ten-stack query
    const { data: users = [],
        isLoading,
        refetch
    } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const result = await axios.get("/users")
            return result.data
        }

    })

    console.log(users);
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
                        <th className="px-6 py-4 ">Status</th>
                        <th className="px-6 py-4 ">Make <br />Admin</th>
                        <th className="px-6 py-4 ">Last <br /> Login</th>
                        <th className="px-6 py-4 ">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Table rows */}
                    {
                        users?.map((user, index) =>
                            <tr className="h-[70px] border-b bg-indigo-500 text-[#FFFFFF]" key={user._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex justify-center items-center">
                                        <img className="h-[44px] w-[44px] rounded-full bg-slate-500 object-cover" src={user.photoURL} />
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{
                                    user?.status === 'pending' ? <button className="btn btn-sm bg-red-700 text-white hover:bg-black">{user?.status}</button> : "user"
                                }</td>

                                <td>
                                    <button className="bg-green-500 btn-sm btn text-white hover:bg-black">Admin</button>
                                </td>
                                <td>{new Date(user?.lastLogin).toLocaleString("en-US", { timeZone: "Asia/Dhaka" })}</td>
                                <td>
                                    <button className="btn btn-sm bg-red-600 hover:bg-black text-white">Delete</button>
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>

    );
};

export default Users;