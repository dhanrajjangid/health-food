import React, { useEffect, useState } from "react";
import { usePrevious } from "./apiFunctions";
import OrderItem from "./Components/OrderItem";

// Component to render the list of previous orders
const PreviousOrders = () => {
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;

  const getOrders = usePrevious();
  const [orderList, setOrderList] = useState();
  const getData = async () => {
    const response = await getOrders(player_id);
    setOrderList(response?.orders);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(orderList, "order list is console");
  return (
    <div style={{ boxSizing: "border-box", padding: "1rem" }}>
      <h2 style={{ marginBottom: "1.5rem" }}>Order History</h2>
      {orderList?.map((order) => {
        return (
          <>
            <OrderItem key={order?._id} order={order} onClick={()=> Navigate(`/order-history/${order?._id}`)}/>
          </>
        );
      })}
    </div>
  );
};

export default PreviousOrders;
