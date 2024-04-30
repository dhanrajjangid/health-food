import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePrevious } from "./apiFunctions";

// Styled components for the order card
const OrderCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const OrderId = styled.div`
  font-weight: bold;
`;

const OrderDate = styled.div`
  color: #666;
`;

const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProductItem = styled.li`
  margin-bottom: 5px;
`;

const TotalPrice = styled.div`
  margin-top: 10px;
  font-weight: bold;
`;

// Component to render a single order card
const OrderItem = ({ order, totalPrice }) => (
  <OrderCard>
    <OrderId>Order ID: {order?._id}</OrderId>
    <OrderDate>Date: {order?.date}</OrderDate>
    <ProductList>
      {order?.items?.map((product, index) => (
        <ProductItem key={index}>
          {product?.name} - ${product?.price}
        </ProductItem>
      ))}
    </ProductList>
    <TotalPrice>Total: ${totalPrice}</TotalPrice>
  </OrderCard>
);

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
    <div>
      <h2>Previous Orders</h2>
      {orderList?.map((order) => {
        const items = order?.items;
        let totalPrice = 0;
        for (const product of items) {
          totalPrice += product.price;
        }
        return (
          <OrderItem key={order?._id} totalPrice={totalPrice} order={order} />
        );
      })}
    </div>
  );
};

export default PreviousOrders;
