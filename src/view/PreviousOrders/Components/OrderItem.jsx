import React from "react";
import {
  StyledOrderItem,
  ProductInfo,
  ProductImage,
  ProductContent,
  EstimateDelivery,
  Quantity,
  ProductPrice,
} from "./StyledComponents";
import { formatDate } from "../../../utils";

const OrderItem = ({ order }) => {
  return (
    <StyledOrderItem>
      <ProductInfo>
        <div style={{ display: "flex", gap: "10px" }}>
          <ProductImage
            src={
              order?.productId?.imageUrl || "https://via.placeholder.com/100"
            }
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
              <Quantity>{formatDate(order?.orderDate)}</Quantity>
              <Quantity>{`(${order?.items?.length} ${
                order?.items?.length > 1 ? "Items" : "Item"
              })`}</Quantity>
            </div>
            <EstimateDelivery>Estimated delivery on 21 Dec</EstimateDelivery>
          </ProductContent>
        </div>
      </ProductInfo>
    </StyledOrderItem>
  );
};

export default OrderItem;
