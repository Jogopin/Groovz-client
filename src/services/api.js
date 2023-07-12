import axios from "axios";

const publicAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
const privateAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const setToken = token =>{
    privateAPI.defaults.headers.common['Authorization']=`Bearer ${token}`
}

const removeToken = ()=>{
    delete publicAPI.defaults.headers.common['Authorization'];
}

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
    publicAPI,
    privateAPI,
    setToken,
    removeToken,
    uploadImage,
}