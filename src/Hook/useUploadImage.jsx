import axios from "axios";

const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;


const useUploadImage = async({imageFile}) => {


    const  result = await axios.post(img_hosting_api,imageFile,{
        headers:{
            'Content-Type':"multipart/form-data"
        }
    })

    return {result:result.data}
};

export default useUploadImage;