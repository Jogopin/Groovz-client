import { useState, useEffect } from 'react';
import { getProductData, getReviewsFromProduct } from "../services/api";

export const useProductData = (productId) => {
  const [productData, setProductData] = useState(null);
  const [reviewsList, setReviewsList] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const updateReviewsList = async () => {
    try {
      const reviewsArray = await getReviewsFromProduct(productId);
      setReviewsList(reviewsArray);
    } catch (error) {
      // Errors comming from the api  are handled in the callApi function from api.js    
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const productObj = await getProductData(productId);
        setProductData(productObj);
        await updateReviewsList();
      } catch (error) {
        setErrorMessage(error.response.data.message);
        console.log(`Error getting the product "${productId}", `, error);
      }
    })();
  }, [productId]);

  return { productData, reviewsList, updateReviewsList, errorMessage };
};
