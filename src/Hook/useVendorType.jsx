import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";


const useVendorType = () => {
    //axios hook calling
    const axios = usePublicAxios()

    const {data:options=[],isLoading,refetch} = useQuery({
        queryKey:['vendorType'],
        queryFn:async()=>{
            const response = await axios.get("/vendor-types")
            return response?.data
        }
    })

    return [options,refetch,isLoading]
};

export default useVendorType;