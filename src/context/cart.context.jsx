import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";


export const CartContext = createContext();

// Max number of units from a product in the cart
const MAX_QUANTITY = 5;

export function CartProviderWrapper({ children }) {
  // Initialized the state checking in the local storage
  const [cartProducts, setCartProducts] = useState(() => {
    try {
      const savedCartProducts = localStorage.getItem("cartProducts");
      return savedCartProducts ? JSON.parse(savedCartProducts) : [];
    } catch (error) {
      console.error('Failed to retrieve cart data from local storage:', error);
      return [];
    }
  });
  // when cartProducts changes, localStorage is updated
  useEffect(()=>{
    try{
      localStorage.setItem("cartProducts",JSON.stringify(cartProducts))
    }catch(error){
      console.error('Failed to save cart data to local storage:', error)
    }
  },[cartProducts])

  const addToCart = (productToCart,quantity=1) => {
    
    
    // check if the product is already in the cart
    const indexOfProduct = cartProducts.findIndex(
      (product) => product.reference === productToCart.reference
    );

    // if the product is not in the cart
    if (indexOfProduct < 0) {
      setCartProducts((prevState) => {
        return [...prevState, {...productToCart,quantity}];
      });
      
    // if the product is in the cart
    } else {
      const productInCart = cartProducts[indexOfProduct];
      let newQuantity = productInCart.quantity + quantity;

      if (newQuantity > MAX_QUANTITY) {
        newQuantity = MAX_QUANTITY;
        toast(`max ${MAX_QUANTITY} units in the cart`,{
          icon:"⛔",
        })
      }

      const productToCartUpdated = { ...productInCart, quantity: newQuantity };

      setCartProducts((prevState) => {
        const newCart = [...prevState];
        newCart[indexOfProduct] = productToCartUpdated;
        return newCart;
      });
    }
  };

  const removeProductFromCart = (productRef) => {
    const indexOfProduct = cartProducts.findIndex(
      (product) => product.reference === productRef
    );
    const productInCart = cartProducts[indexOfProduct];

    if (productInCart.quantity <= 1) {
      setCartProducts((prevState) => {
        return prevState.filter((item) => item.reference !== productRef);
      });
    } else {
      const productUpdated = {
        ...productInCart,
        quantity: productInCart.quantity - 1,
      };

      setCartProducts((prevState) => {
        const newCart = [...prevState];
        newCart[indexOfProduct] = productUpdated;
        return newCart;
      });
    }
  };

  const clearCart = () => {    
    setCartProducts([]);
  };

  const totalPrice = cartProducts.reduce(
    (acc, curr) => curr.price * curr.quantity + acc,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        clearCart,
        removeProductFromCart,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
