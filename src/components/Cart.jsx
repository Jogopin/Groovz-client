import React, { useState } from "react";
import { cartIcon, xIcon } from "../assets/icons";
import { useCart } from "../hooks/useCart";
import { Link, useNavigate } from "react-router-dom";
import ButtonText from "./ButtonText";

const Cart = () => {
  const { cartProducts, totalPrice, removeProductFromCart, clearCart } =
    useCart();
  const [isCartDisplayed, setIsCartDisplayed] = useState(false);
  const navigate = useNavigate()
  
  const handleGoToCheckout = ()=>{
    navigate(`/checkout`)
    toggleCart()
  }
  const toggleCart = (e) => {
    setIsCartDisplayed((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleCart} className="relative flex h-7 w-7 ">
        <img
          src={cartIcon}
          className="object-contain invert hover:invert-[70%]"
        />
        {cartProducts.length === 0 ? null : (
          <span className="top right absolute -right-2 -top-2 m-0 h-4 w-4 rounded-full bg-red-600 p-0 text-center font-mono text-sm  leading-tight text-white">
            {cartProducts.reduce((acc, curr) => acc + curr.quantity, 0)}
          </span>
        )}
      </button>
      {isCartDisplayed && (
        <>
          <div
            className="fixed inset-0 z-20 bg-zinc-800/50"
            onClick={toggleCart}
          ></div>
          <aside className="fixed  right-0 top-0 z-50 flex h-full w-full flex-col bg-zinc-800/90 sm:w-96">
            <button
              onClick={toggleCart}
              className="right-20 m-4 flex h-7 w-7  self-end"
            >
              <img src={xIcon} className="h-full invert hover:invert-[70%] " />
            </button>

            {/* Products in the cart */}
            <ul className="flex max-h-[65%] flex-col gap-6 overflow-y-auto py-8">
              {cartProducts.length === 0 ? (
                <h2 className="self-center py-4 text-center">
                  0 items in the Cart
                </h2>
              ) : null}
              {cartProducts.map((item) => (
                <li
                  className="flex items-center justify-center gap-4 px-8 "
                  key={item._id}
                >
                  <Link to={`/store/${item._id}`}>
                    <img
                      className="w-24  rounded-md bg-zinc-300"
                      src={item.images[0]}
                      alt={item.name}
                    />
                  </Link>

                  <section className="flex h-20 w-48 justify-between">
                    <div className="flex min-w-full flex-col justify-between text-xs">
                      <h4 className="truncate text-left text-sm">
                        {item.name}
                      </h4>
                      <h3 className="text-left text-base">{item.price}€</h3>
                      <span className="text-center opacity-80">
                        Qty: {item.quantity}
                      </span>
                    </div>
                    {/* remove one item */}
                    <button
                      onClick={() => {
                        removeProductFromCart(item.reference);
                      }}
                      className="w-8 text-lg font-extrabold text-red-600"
                    >
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

            <div className="my-12 flex w-80 justify-evenly gap-4 self-center">
              <ButtonText
                text={"Go to Checkout"}
                handleClick={handleGoToCheckout}
              />
              <ButtonText
                text={"Clear Cart"}
                variant={"secondary"}
                handleClick={clearCart}
              />
              
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Cart;
