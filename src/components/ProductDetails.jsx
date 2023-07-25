import React, { useState } from "react";
import Carousel from "./Carousel";
import { addCartIcon } from "../assets/icons";
import RatingDisplay from "./RatingDisplay";
import { useCart } from "../hooks/useCart";

const ProductDetails = ({ productData, rating }) => {
  const {addToCart}=useCart()
  const [quantity,setQuantity] =useState(1)
  const inStock=productData?.stock>0

  if (productData === null) {
    console.log("loading productData");
    return "loading";
  }
  const handleAddToCart =()=>{
    if(quantity<=0) return
    addToCart(productData,quantity)
  }
  const handleClickMinus =()=>{
    if(quantity===0) return
    setQuantity(prevState=>prevState-1)
  }
  const handleClickPlus =()=>{
    if(quantity>=5) return
    setQuantity(prevState=>prevState+1)
  }
  
  return (
    <div className="mx-auto mt-16 flex flex-col justify-center lg:max-w-5xl  lg:flex-row ">
      {/* Left */}

      <Carousel imagesList={productData.images} />

      {/* Right */}
      <div className="flex w-full flex-col gap-2 px-8 py-4 text-zinc-800">
        {/* Name */}
        <h2 className="py-2 text-3xl font-semibold">{productData.name}</h2>
        {/* rating */}
        <div className="flex">
          <RatingDisplay rating={rating} />
          <span className="ml-2 font-semibold">
            {rating ? rating : "0 Reviews"}
          </span>
        </div>

        {/* Details */}
        <h4 className="text-xl font-semibold">Details</h4>
        <p>{productData.description}</p>
        <h2 className="my-2 text-right text-3xl font-bold text-red-700 md:my-8">
          {productData.price}€
        </h2>

        {/* Add to cart section */}
        <div className="my-2 flex  flex-col  items-center gap-4 self-center md:flex-row lg:mt-8 ">
          {/* Quantity control */}
          <div className="flex h-14 w-auto flex-none items-center justify-around rounded-md bg-zinc-300 text-center">
            <button onClick={handleClickMinus} className="h-full w-14 text-lg font-bold text-red-700 hover:rounded-l-md hover:bg-zinc-400">
              -
            </button>
            <span className="text-md w-14 font-bold">{quantity}</span>
            <button onClick={handleClickPlus} className="h-full w-14 text-lg font-bold text-red-700 hover:rounded-r-md hover:bg-zinc-400">
              +
            </button>
          </div>
          {/* Add to cart button */}
          <button onClick={handleAddToCart} className="btn-primary flex h-14  items-center justify-evenly" disabled={productData.stock<quantity || quantity===0}>
            <img src={addCartIcon} className="w-8 invert" alt="Cart-Icon"/>
            {inStock ? <span>Add to the cart</span> : <span>Out of stock</span>}
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
