import React, { useState } from "react";
import { cartIcon, xIcon } from "../assets/icons";
import { useCart } from "../hooks/useCart";



const totalPrice = 500;

const Cart = () => {
  const {cartProducts} = useCart()
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);
  const toggleCart = (e)=>{
    setIsCartDisplayed((prevState=> !prevState))
  }
  
  return (
    <>
      <button onClick={toggleCart} className="flex h-7 w-7 ">
        <img
          src={cartIcon}
          className="object-contain invert hover:invert-[70%]"
        />
      </button>
      {isCartDisplayed && (
        <aside className="fixed  right-0 top-0 z-50 flex h-full w-96 flex-col bg-zinc-900/90">

          
            <button onClick={toggleCart} className="right-20 m-4 flex h-7 w-7  self-end">
              <img src={xIcon} className="h-full invert hover:invert-[70%] " />
            </button>
          
          {/* Products in the cart */}
          <ul className="flex max-h-[65%] flex-col gap-6 py-8">
            {cartProducts.map((item) => (
              <li
                className="flex items-center justify-between px-8 "
                key={item._id}
              >
                <img
                  className="w-24  rounded-md bg-zinc-300"
                  src={item.images[0]}
                  alt={item.name}
                />

                <section className="flex-cold flex h-20 w-48 justify-between ">
                  <div className="flex min-w-full flex-col justify-between text-xs">
                    <h4 className="truncate text-left text-sm">{item.name}</h4>
                    <h3 className="text-left text-base">{item.price}€</h3>
                    <span className="text-center opacity-80">
                      Qty: {item.quantity}
                    </span>
                  </div>
                  <button  className="w-8 text-lg font-extrabold text-red-600">
                    X
                  </button>
                </section>
              </li>
            ))}
          </ul>
          {/* Total Price */}
          <h2 className="w-[80%] self-center border-y-2 py-4 text-center">
            Total: {totalPrice}€
          </h2>

          <div className="flex-cold my-12 flex w-80 justify-evenly gap-4 self-center">
            <button className="btn-primary">Check Out</button>
            <button className="btn-secondary">Clean Cart</button>
          </div>
        </aside>
      )}
    </>
  );
};

export default Cart;
