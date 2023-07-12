import axios from "axios";

const publicAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
const privateAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})


const errorHandler = (error)=>{
    throw error;
}

const uploadImage = async (file) => {
    try {
        const response = await publicAPI.post("/upload", file);
        return response.data;
    } catch (error) {
        errorHandler(error);
    }
};


export default{
    uploadImage,
}