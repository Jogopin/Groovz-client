import React from "react";
import { cartIcon } from "../assets/icons";
import defImg from "../assets/imgs/defImg.webp";
import defImgRed from "../assets/imgs/defImgRed.png";

const productsInCart = [
  {
    _id: 1,
    name: "Lorem Ipsum HQ",
    price: "99",
    images: [defImg, defImgRed],
    quantity: 1,
  },
  {
    _id: 2,
    name: "Lorem Ipsum HQ bla bla bla black",
    price: "199",
    images: [defImg, defImgRed],
    quantity: 2,
  },
];

const Cart = () => {
  const totalPrice = 500
  return (
    <>
      <button className="flex h-7 w-7">
        <img
          src={cartIcon}
          className="object-contain invert hover:invert-[70%]"
        />
      </button>
      <aside className="fixed hidden z-50 right-0 top-16 flex h-full w-96 flex-col bg-zinc-900/90">
        <ul className="flex flex-col gap-6">
          {productsInCart.map((item) => (
            <li
              className="flex items-center justify-between px-8 "
              key={item._id}
            >
              <img
                className="w-24  rounded-md bg-zinc-300"
                src={item.images[0]}
                alt={item.name}
              />

              <section className="flex h-20 w-48 flex-cold justify-between ">
                <div className="flex flex-col text-xs min-w-full justify-between">
                  <h4 className="text-left text-sm truncate">{item.name}</h4>
                  <h3 className="text-left text-base">{item.price}€</h3>
                  <span className="opacity-80 text-center">Qty: {item.quantity}</span>
                </div>
                <button className="w-8 text-lg font-extrabold text-red-600">
                  X
                </button>
              </section>
            </li>
          ))}
          
          <li className="text-center border-y-2 w-[80%] py-4 self-center">
            <h2>Total: {totalPrice}€</h2>
          </li>
        </ul>
        <div className="flex flex-cold self-center gap-4 justify-evenly my-12 w-80">
          <button className="btn-primary">Check Out</button>
          <button className="btn-secondary">Clean Cart</button>
        </div>
      </aside>
    </>
  );
};

export default Cart;
