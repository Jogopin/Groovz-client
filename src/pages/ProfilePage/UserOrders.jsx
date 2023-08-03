import { useEffect, useState } from "react";
import { getOrdersFromUser } from "../../services/api";
import dayjs from "dayjs";
import OrderDisplay from "./OrderDisplay";


export default function UserOrders({ userId }) {
  const [ordersList, setOrdersList] = useState([]);

  const loadUserOrders = async () => {
    try {
      const response = await getOrdersFromUser(userId);
      response.sort((a, b) => dayjs(b.createdAt) - dayjs(a.createdAt));
      setOrdersList(response);
      
    } catch (error) {
      // Errors comming from the api  are handled in the callApi function from api.js
    }
  };
  useEffect(() => {
    loadUserOrders();
  }, [userId]);

  return (
    <>
      {ordersList.map((order) => (
        <OrderDisplay order={order} key={order._id}/>
      ))}
    </>
  );
}

