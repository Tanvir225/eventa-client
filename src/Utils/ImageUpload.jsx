import axios from "axios";

const img_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const ImageUpload = async ({ imageFile}) => {

  console.log(imageFile);
  try {
    const result = await axios.post(img_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return { success: true, result: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export default ImageUpload;
