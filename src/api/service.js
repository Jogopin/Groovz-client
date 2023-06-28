import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const errorHandler = (error)=>{
    throw error;
}

const uploadImage = async (file) => {
    try {
        const response = await api.post("/upload", file);
        return response.data;
    } catch (error) {
        errorHandler(error);
    }
};

// const getProducts = () => {
//     return api.get("/products")
//       .then((res) => res.data)
//       .catch(errorHandler);
//   };

// const createProduct = (newProduct) => {
//     return api.post("/products", newProduct)
//       .then(res => res.data)
//       .catch(errorHandler);
//   };

export default{
    uploadImage
}