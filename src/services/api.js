// api.js
import axios from "axios";
import { toast } from "react-hot-toast";

// create a public axios instance for making requests that don't require authentication
const publicAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// create a private axios instance for making requests that require authentication
const privateAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// function to set the Authorization token for the private axios instance
export const setTokenInHeaders = (token) => {
  privateAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// function to clear the Authorization token from the private axios instance
export const clearTokenHeaders = () => {
  delete privateAPI.defaults.headers.common["Authorization"];
};
const handleError = (error) => {
  const errorMessage =
    error.response?.data?.message ||
    "Ups! Something has happened, please try again later.";
  // console.error("toast", errorMessage);
  toast.error(errorMessage);
  throw error;
};

const callApi = async (apiMethod) => {
  try {
    const response = await apiMethod();
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const uploadImage = (file) =>
  callApi(() => publicAPI.post("/upload", file));

export const getProducts = () => callApi(() => publicAPI.get("/products"));

export const getProductData = (productId) =>
  callApi(() => publicAPI.get(`/products/${productId}`));

export const getReviewsFromProduct = (productId) =>
  callApi(() => publicAPI.get(`/reviews/${productId}`));

export const getUserDetails = (userId) =>
  callApi(() => privateAPI.get(`/auth/user/${userId}`));
export const startCheckout = ({ productsToCheckout, customerData }) =>
  callApi(() =>
    publicAPI.post("/checkout", { productsToCheckout, customerData })
  );
export const postReview = ({ user, product, rating, reviewText }) =>
  callApi(() =>
    privateAPI.post("/reviews", { user, product, rating, reviewText })
  );

export const updateUserDetails = ({ userId, firstName, lastName, address }) =>
  callApi(() =>
    privateAPI.put(`/auth/user/${userId}`, { firstName, lastName, address })
  );
export const createProduct = ({
  name,
  reference,
  description,
  price,
  discount,
  stock,
  category,
  images,
}) =>
  callApi(() =>
    privateAPI.post("/products", {
      name,
      reference,
      description,
      price,
      discount,
      stock,
      category,
      images,
    })
  );
export const getOrdersFromUser = (userId) =>
  callApi(() => privateAPI.get(`/orders/${userId}`));

export const signup = ({ username, email, password }) =>
  callApi(() => publicAPI.post("/auth/signup", { username, email, password }));

export const login = ({ username, password }) =>
  callApi(() => publicAPI.post("/auth/login", { username, password }));

export const verifyUser = () => callApi(() => privateAPI.get("/auth/verify"));

export const sendContactMessage= ({email,subject,message}) =>callApi(()=>publicAPI.post("/contact",{email,subject,message}))

