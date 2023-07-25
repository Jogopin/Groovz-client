import { useEffect, useState } from "react"
import { getOrdersFromUser } from "../../services/api"

export default function UserOrders ({userId}){
    const [ordersList,setOrdersList] =useState([])

    useEffect(()=>{
        
        if(!userId) return
              
        (async()=>{
          try{
            const response = await getOrdersFromUser(userId)
            console.log(response)
            setOrdersList(response)
          }catch(error){
            console.error(error.response.data.message)
          }
        })()
      },[userId])

    return <>
    {ordersList.map(order=>(
      <div className="border-2 m-2" key={order._id}>
        <span>order #{order._id}</span>
        <h2>Total Price: {order.total}€</h2>
        <h3>Total products ordered: {order.products.reduce((acc,curr)=>(acc + curr.quantity),0)}</h3>
        {order.products.map(item=>(<div key={item._id}>
          <img src={item.product.images[0]} className="w-20"/>
          <h2>Product name: {item.product.name}</h2>
          <h2>Price at purchase: {item.priceAtPurchase}</h2>
          <h2>quantity: {item.quantity}</h2>

        </div>))}
        <h3>Status: {order.status}</h3>
      </div>
    ))}
  </>
}