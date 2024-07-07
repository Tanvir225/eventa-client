import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useVendorArea = () => {
    //axios hook calling
    const axios = usePublicAxios()

    const {data:area=[],isLoading,refetch} = useQuery({
        queryKey:['vendorArea'],
        queryFn:async()=>{
            const response = await axios.get("/vendor-area")
            return response?.data
        }
    })

    return [area,refetch,isLoading]
};

export default useVendorArea;