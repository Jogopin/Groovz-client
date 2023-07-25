import { useEffect, useState } from "react"
import { getOrdersFromUser } from "../../services/api"
import dayjs from "dayjs"

export default function UserOrders ({userId}){
    const [ordersList,setOrdersList] =useState([])

    useEffect(()=>{
        
        if(!userId) return
              
        (async()=>{
          try{
            const response = await getOrdersFromUser(userId)
            console.log(response)
            response.sort((a,b)=>dayjs(b.createdAt) - dayjs(a.createdAt))
            setOrdersList(response)
          }catch(error){
            console.error(error.response.data.message)
          }
        })()
      },[userId])

    return <>
    {ordersList.map(order=>(
      <div className="border-2 m-2" key={order._id}>
        <h2>{ dayjs(order.createdAt).format("DD/MM/YY")}</h2>
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