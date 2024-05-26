import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";


const useAdmin = () => {
    //useAxios calling
    const axios = useAxios()

    //useAuth 
    const {user,loading} = useAuth()

    //ten-stack query
    const {data:isAdmin,isPending} = useQuery({
        enabled: !!user && !loading,
        queryKey: ['admin',user?.email],
        queryFn: async()=>{
            const result = await axios.get(`/users/${user?.email}`)
            return result?.data?.isAdmin
        }
    })

    return [isAdmin,isPending]
};


export default useAdmin;