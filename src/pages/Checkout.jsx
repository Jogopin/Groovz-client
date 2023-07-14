import axios from "axios";
import { useCart } from "../hooks/useCart";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";

export default function Checkout() {
  const { cartProducts,totalPrice } = useCart();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email,setEmail] = useState("")
    const {user} = useContext(AuthContext)
    


  const handleCheckOut = () => {
    const productsToCheckout = cartProducts.map((item) => {
      return { reference: item.reference, quantity: item.quantity };
    });
    const customerData = {
        firstName,lastName,address,email,userId: user? user._id:null
    }
    
    axios
      .post(`${import.meta.env.VITE_API_URL}/checkout`, { productsToCheckout,customerData })
      .then((response) => {
        const url = response.data;
        window.location.href = url;
      })
      .catch((error) => {
        console.error("error", error.response.data);
      });
  };

  return (
    <div className="flex justify-center">
      <div>
        {/* Cart */}
        <div className="border-2 ">
          <h2>Your Cart</h2>
          <div>
            {cartProducts.map((prod) => (
              <div key={prod._id} className="flex">
              <img src={prod.images[0]} className="w-36"/>
                <h3>{prod.name}</h3>
                <h3>{prod.price}</h3>
                <span>{prod.quantity}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Customer Details */}
        <div className="border-2">
          <h2>Your Details</h2>
          <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="First name" required/>
          <input value={lastName} onChange={(e)=>setLastName(e.target.value)}  type="text" placeholder="Last name" required/>
          <input value={address} onChange={(e)=>setAddress(e.target.value)}  type="text" placeholder="Shipping Address" required/>
          <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="email" required/>
          <label>
                {"save address "} 
            <input type="checkbox"/>
          </label>
        </div>
      </div>
      {/* Summary */}
      <div className="border-2">
        <h2>Summary</h2>
        <h3>Total: {totalPrice}€</h3>
        <button className="btn-primary" onClick={handleCheckOut}>Checkout</button>
      </div>
    </div>
  );
}
