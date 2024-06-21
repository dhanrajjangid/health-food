import React from "react";
import {
  ProductInfo,
  ProductImage,
  ProductContent,
  EstimateDelivery,
  Quantity,
  ProductPrice,
} from "./StyledComponents";
import { formatDate } from "@/utils";
import { useNavigate } from "react-router-dom";

const OrderItem = ({ order }) => {
  const navigate = useNavigate();

  return (
    <ProductInfo onClick={() => navigate(`/order-history/${order?._id}`)}>
      <div style={{ width: "100%", display: "flex", gap: "10px" }}>
        <ProductImage
          src={order?.items?.[0]?.image || "https://via.placeholder.com/100"}
          alt={order?.productId?.name}
        />
        <ProductContent>
          <ProductPrice>Order#: {order?._id}</ProductPrice>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Quantity>{order?.orderDate && formatDate(order?.orderDate)}</Quantity>
            <Quantity>{`(${order?.items?.length} ${
              order?.items?.length > 1 ? "Items" : "Item"
            })`}</Quantity>
          </div>
          <EstimateDelivery>Estimated delivery on 21 Dec</EstimateDelivery>
        </ProductContent>
      </div>
    </ProductInfo>
  );
};

export default OrderItem;
