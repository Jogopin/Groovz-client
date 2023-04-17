import React from "react";
import { addCartIcon } from "../assets/icons";

const Product = ({product}) => {
  return (
    <div className="flex flex-col items-center ">
      <div
        // key={product._id}
        className="flex aspect-square items-center justify-center rounded-lg bg-zinc-300 duration-300 ease-in-out hover:scale-110 hover:drop-shadow-2xl"
      >
        <img className="h-full" src={product.defImg} />
      </div>
      <div className="flex w-full items-center justify-between text-zinc-800">
        <button className="easi-in h-12 w-12 duration-200 hover:scale-125">
          <img src={addCartIcon} />
        </button>
        <div className="text-right">
          <h3 className="text-xl font-semibold ">{product.name}</h3>
          <p className=" text-2xl font-bold">{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
