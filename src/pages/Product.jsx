import React from 'react'
import ProductDetails from '../components/ProductDetails'
import RatingReviewInput from '../components/RatingReviewInput'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {productId} = useParams()
  
  return (
    <>
        <ProductDetails/>
        <RatingReviewInput/>
    </>
  )
}

export default Product