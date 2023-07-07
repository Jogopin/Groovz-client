import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProviderWrapper({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (productToCart) => {

    // check if the product is already in the cart
    const indexOfProduct = cartProducts.findIndex(
      (product) => ( product.reference === productToCart.reference )
    );
    
    // if the product is not in the cart
    if (indexOfProduct<0) {
        setCartProducts(prevState=>{
            return [...prevState,productToCart]
        })
    // if the product is in the cart 
    } else {
        const newProduct = cartProducts[indexOfProduct]
        const productToCartUpdated = {...newProduct,quantity:(newProduct.quantity + productToCart.quantity)}
        
        setCartProducts(prevState=>{
            const newCart = [...prevState]
            newCart[indexOfProduct] = productToCartUpdated
            return newCart
        })
    }
    
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
