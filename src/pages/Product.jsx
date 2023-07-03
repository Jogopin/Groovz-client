import React, { useEffect, useState } from 'react'
import ProductDetails from '../components/ProductDetails'
import RatingReviewInput from '../components/RatingReviewInput'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
  const {productId} = useParams()
  const [productData, setProductData] = useState(null)
  

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
      .then(response=>setProductData(response.data))
      .catch((error)=>{
        console.log(`Error getting the product "${productId}", `,error)
      })
  },[productId])

  return (
    <>
        <ProductDetails productData={productData} />
        <RatingReviewInput/>
    </>
  )
}

export default Product