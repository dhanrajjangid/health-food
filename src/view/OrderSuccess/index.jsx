import React from "react";
import styled from "styled-components";
import { ContainedButton } from "../../components/Common/FormInputs";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  padding: 80px 40px;
  border-radius: 10px;
  text-align: center;
  max-width: 100%;
`;

const Icon = styled.div`
  font-size: 50px;
  color: #28a745;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666; /* Gray text color */
  margin-bottom: 20px;
`;

const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card>
        <Icon>✔</Icon>
        <Title>PAYMENT SUCCESSFUL</Title>
        <Description>
          Your order will be ready in a week, including shipping. More details
          and options for tracking will be available in "ORDER STATUS" menu.
        </Description>
        <ContainedButton navigate={() => navigate("/")}>
          CONTINUE SHOPPING
        </ContainedButton>
      </Card>
    </Container>
  );
};

export default OrderSuccess;
