import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Text = styled.p`
  color: #555;
`;

const LinkWrapper = styled.div`
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
`;

const OrderConfirm = () => {
  return (
    <Container>
      <Content>
        <Title>Order Successful</Title>
        <Text>Your order has been successfully placed. Thank you for shopping with us!</Text>
        <LinkWrapper>
          <StyledLink to="/">Go to Home</StyledLink>
        </LinkWrapper>
      </Content>
    </Container>
  );
};

export default OrderConfirm;
