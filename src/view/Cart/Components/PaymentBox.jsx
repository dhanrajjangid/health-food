import React, { useState } from "react";
import styled from "styled-components";
import {
  ContainedButton,
  OutlinedButton,
} from "../../../components/Common/FormInputs";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const PaymentElement = styled.div`
  background: #1a1a1a;
  color: #fff;
  box-sizing: border-box;
  padding: 20px 10px;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PaymentText = styled.div`
  margin-left: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
`;

const Popup = styled.div`
  background: #1a1a1a;
  color: #fff;
  padding: 30px;
  width: 300px;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background: #333;
  padding: 10px;
`;

const Radio = styled.input`
  margin-right: 10px;
`;

const Image = styled.img`
  width: 30px;
  height: auto;
  margin-right: 10px;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 2.5rem;
`;

const PaymentBox = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <Container>
      <h4 style={{ margin: 0, marginTop: "1.5rem" }}>Payment Method</h4>
      <PaymentElement onClick={togglePopup}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            style={{ width: "30px" }}
          />
          <PaymentText>CARD/UPI</PaymentText>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 17l5-5-5-5v10z" />
        </svg>
      </PaymentElement>

      {isPopupOpen && (
        <Overlay>
          <Popup>
            <Title>Payment Method</Title>
            <PaymentMethod>
              <Radio
                type="radio"
                name="payment"
                value="online"
                checked={selectedPayment === "online"}
                onChange={handlePaymentChange}
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="Visa"
              />
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                alt="MasterCard"
              />
              <span>CARD/UPI</span>
            </PaymentMethod>
            <ActionButtons>
              <ContainedButton padding="6px 5px" onClick={togglePopup}>
                Continue
              </ContainedButton>
              <OutlinedButton padding="6px 5px" onClick={togglePopup}>
                Cancel
              </OutlinedButton>
            </ActionButtons>
          </Popup>
        </Overlay>
      )}
    </Container>
  );
};

export default PaymentBox;
