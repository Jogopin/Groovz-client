import { useContext } from "react"
import { CartContext } from "../context/cart.context"

export const useCart = ()=>{
    const {cartProducts}  = useContext(CartContext)
    if(cartProducts === undefined){
        throw new Error("useCart must be used within a CartProvider")
    }
    const totalPrice = cartProducts.reduce((acc,curr)=>(
        (curr.price * curr.quantity) + acc
    ),0)

    return {cartProducts,totalPrice}
} 