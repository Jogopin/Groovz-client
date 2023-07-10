import { useContext } from "react"
import { CartContext } from "../context/cart.context"

export const useCart = ()=>{
    const {cartProducts,addToCart,clearCart,removeProductFromCart,totalPrice}  = useContext(CartContext)

    if(cartProducts === undefined){
        throw new Error("useCart must be used within a CartProvider")
    }
    

    return {cartProducts,totalPrice,addToCart,clearCart,removeProductFromCart}
} 