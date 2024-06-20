// src/components/OrderDetails.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Use useHistory if you are using React Router v5
import { fakeOrderData } from "@/utils/productData";
import { FaArrowLeft } from "react-icons/fa"; // Ensure you have react-icons installed

const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  color: #333;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const TopBox = styled.div`
  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 500px;
  width: 100%;
`;

const Box = styled.div`
  background: #1a1a1a;
  color: #fff;
  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  max-width: 500px;
  width: 100%;
`;

const DetailText = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: bold;
`;

const Item = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

const ItemDetails = styled.div`
  flex: 1;
  margin-left: 10px;
`;

const SummaryItem = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
`;

const OrderDetails = () => {
  const navigate = useNavigate();

  const {
    orderId,
    deliveryDate,
    total,
    status,
    items,
    paymentMode,
    shippingAddress,
    summary,
  } = fakeOrderData;

  return (
    <Container>
      <BackButton onClick={() => navigate("/order-history")}>
        <FaArrowLeft />
      </BackButton>
      <Title>Order Details</Title>
      <TopBox>
        <DetailText>
          <Label>Order ID:</Label> <span>{orderId}</span>
        </DetailText>
        <DetailText>
          <Label>Delivery:</Label> {deliveryDate}
        </DetailText>
        <DetailText>
          <Label>Total:</Label> {total}
        </DetailText>
        <DetailText>
          <Label>Status:</Label> {status}
        </DetailText>
      </TopBox>

      <Section>
        <Title>Items ({items.length})</Title>
        <Box>
          {items.map((item) => (
            <Item key={item.id}>
              <img
                src={
                  "https://images.pexels.com/photos/7303902/pexels-photo-7303902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt={item.name}
                width="60"
                height="60"
              />
              <ItemDetails>
                <p>{item.name}</p>
                <Label>Price: ₹{item.price}</Label>
                <p>Qty: {item.qty}</p>
              </ItemDetails>
            </Item>
          ))}
        </Box>
      </Section>

      <Section>
        <Title>Payment & Shipping</Title>
        <Box>
          <DetailText>
            <Label>Payment Mode: </Label> <span>{paymentMode}</span>
          </DetailText>

          <Label>Shipping Address:</Label>
          <p>{shippingAddress}</p>
        </Box>
      </Section>

      <Section>
        <Title>Order Summary</Title>
        <Box>
          {summary.map((item, index) => (
            <SummaryItem key={index} isBold={item.isBold}>
              <span>{item.label} </span> <span>{item.value}</span>
            </SummaryItem>
          ))}
        </Box>
      </Section>
    </Container>
  );
};

export default OrderDetails;
