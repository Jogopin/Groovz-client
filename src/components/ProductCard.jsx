import React from "react";
import { addCartIcon } from "../assets/icons";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import ButtonIcon from "./ButtonIcon"
const ProductCard = ({product}) => {
  const {addToCart} = useCart()
  const inStock=product.stock>0

  return (
    <div className="flex flex-col items-center">
      <Link
      to={`/store/${product._id}`}
        // key={product._id}
        className="relative flex  items-center justify-center rounded-lg bg-zinc-300 duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl overflow-hidden"
      >
        <img className="h-full" src={product.images[0]} alt="product-image"/>     
        {!inStock && <span className="absolute w-full flex items-center justify-center font-extrabold text-white text-xl bg-zinc-600/40 h-full">Out of Stock</span>}
      </Link>
      <div className="flex w-full items-center justify-between text-zinc-800">
        <ButtonIcon handleClick={()=>{addToCart(product)}} iconImage={addCartIcon} alt={"add-to-cart"}/>
        <div className="text-right">
          <h3 className="text-lg font-semibold ">{product.name}</h3>
          <p className=" text-xl font-bold">{product.price}€</p>
        </div>
       
      </div>
    </div>
  );
};

export default ProductCard;
