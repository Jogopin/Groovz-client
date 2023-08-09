import { useState, useEffect } from 'react';
import { getProductData, getReviewsFromProduct } from "../services/api";

export const useProductData = (productId) => {
  const [productData, setProductData] = useState(null);
  const [reviewsList, setReviewsList] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading,setIsLoading] = useState(false)

  const updateReviewsList = async () => {
    try {
      setIsLoading(true);
      const reviewsArray = await getReviewsFromProduct(productId);
      setReviewsList(reviewsArray);
    } catch (error) {
      // Errors coming from the API are handled in the callApi function from api.js    
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProductData = async () => {
    try {
      setIsLoading(true);
      const productObj = await getProductData(productId);
      setProductData(productObj);
      await updateReviewsList();
    } catch (error) {
      setErrorMessage(error.response.data.message);
      console.log(`Error getting the product "${productId}", `, error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return { productData, reviewsList, updateReviewsList, errorMessage, isLoading };
};