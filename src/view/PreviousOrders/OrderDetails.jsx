import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fakeOrderData } from "@/utils/productData";
import { FaArrowLeft } from "react-icons/fa";
import { usePrevious } from "./apiFunctions";
import { formatDate } from "@/utils";
import {
  BackButton,
  Box,
  Container,
  DetailText,
  Item,
  ItemDetails,
  Label,
  Section,
  SummaryItem,
  Title,
  TopBox,
} from "./Components/StyledComponents";
import { formatAddress, truncatedName } from "@/utils";

const OrderDetails = ({ maxCharacters = 32 }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getOrderById } = usePrevious();

  const [orderData, setOrderData] = useState({});

  const getData = async () => {
    const response = await getOrderById(id);
    setOrderData(response?.order);
  };
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const { items, paymentMode, shippingAddress } = fakeOrderData;

  return (
    <Container>
      <BackButton onClick={() => navigate("/order-history")}>
        <FaArrowLeft />
      </BackButton>
      <Title>Order Details</Title>
      <TopBox>
        <DetailText>
          <Label>Order ID:</Label> <span>{orderData?._id}</span>
        </DetailText>
        <DetailText>
          <Label>Order Date:</Label>{" "}
          {orderData?.orderDate && formatDate(orderData?.orderDate)}
        </DetailText>
        <DetailText>
          <Label>Total:</Label> {orderData?.paymentId?.amount}
        </DetailText>
        <DetailText>
          <Label>Payment Status:</Label> {orderData?.status}
        </DetailText>
      </TopBox>

      <Section>
        <Title>Items ({orderData?.items?.length})</Title>
        <Box>
          {orderData?.items?.map((item) => {
            return (
              <Item key={item.id}>
                <img
                  src={
                    item?.image ||
                    "https://images.pexels.com/photos/7303902/pexels-photo-7303902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  }
                  alt={item.name}
                  width="60"
                  height="60"
                />
                <ItemDetails>
                  <p>{item?.name && truncatedName(item?.name, maxCharacters)}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </ItemDetails>
              </Item>
            );
          })}
        </Box>
      </Section>

      <Section>
        <Title>Payment & Shipping</Title>
        <TopBox>
          <DetailText>
            <Label>Payment Mode: </Label> <span>{paymentMode}</span>
          </DetailText>

          <Label>Shipping Address:</Label>
          <p>{orderData?.address && formatAddress(orderData?.address)}</p>
        </TopBox>
      </Section>

      <Section>
        <Title>Order Summary</Title>
        <TopBox>
          {[
            { label: `Subtotal: (${2}):`, value: orderData?.paymentId?.amount },
            { label: "Delivery Charges:", value: "0.00" },
            { label: "Tax:", value: "0" },
            {
              label: "Total:",
              value: orderData?.paymentId?.amount,
              isBold: true,
            },
          ].map((item, index) => (
            <SummaryItem key={index} isBold={item.isBold}>
              <span>{item.label} </span> <span>₹{item.value}</span>
            </SummaryItem>
          ))}
        </TopBox>
      </Section>
    </Container>
  );
};

export default OrderDetails;
