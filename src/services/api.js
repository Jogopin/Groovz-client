import axios from "axios";

export const publicAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
export const privateAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const setTokenInHeaders = token =>{
    privateAPI.defaults.headers.common['Authorization']=`Bearer ${token}`
}

export const clearTokenHeaders = ()=>{
    delete publicAPI.defaults.headers.common['Authorization'];
}

export const errorHandler = (error)=>{
    throw error;
}

export const uploadImage = async (file) => {
    try {
        const response = await publicAPI.post("/upload", file);
        return response.data;
    } catch (error) {
        errorHandler(error);
    }
};
export const getProducts = async ()=>{

    try{
        const response = await publicAPI.get("/products")
        return response.data

    }catch(error){
        errorHandler(error)
    }
}


