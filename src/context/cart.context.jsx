import { createContext, useState } from "react";

export const CartContext = createContext();

// Max number of units from a product in the cart
const MAX_QUANTITY = 5;

export function CartProviderWrapper({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (productToCart) => {
    // check if the product is already in the cart
    const indexOfProduct = cartProducts.findIndex(
      (product) => product.reference === productToCart.reference
    );

    // if the product is not in the cart
    if (indexOfProduct < 0) {
      setCartProducts((prevState) => {
        return [...prevState, productToCart];
      });
      // if the product is in the cart
    } else {
      const productInCart = cartProducts[indexOfProduct];
      let newQuantity = productInCart.quantity + productToCart.quantity;

      if (newQuantity > MAX_QUANTITY) {
        newQuantity = MAX_QUANTITY;
        console.log("max 5 units in the cart");
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
