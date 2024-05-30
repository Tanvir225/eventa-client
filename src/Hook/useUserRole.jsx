import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const useUserRole = () => {

  //axios hook call
  const axios = useAxios()

  //useAuth hook call
  const {user,loading} = useAuth()

  //tenstack query
  const {data,isPending} = useQuery({
    enabled: !!user && !loading,
    queryKey:["role",user?.email],
    queryFn:async ()=>{
      if (!user?.email) {
        return null
      }

      try{
          const result = await axios.get(`users/${user?.email}`)
          return result?.data
      }
      catch(error){
        console.log("error fetching user role",error)
        return null
      }
    }

  
  })

  return [data,isPending]
};

export default useUserRole;