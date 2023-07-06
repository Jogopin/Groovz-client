import React from "react";
import { cartIcon } from "../assets/icons";

const Cart = () => {
  return (
    <>
    <button className="flex h-7 w-7">
      <img
        src={cartIcon}
        className="object-contain invert hover:invert-[70%]"
      />
    </button>
    {/* <div className="">
      cart box
    </div> */}
    </>
  );
};

export default Cart;
