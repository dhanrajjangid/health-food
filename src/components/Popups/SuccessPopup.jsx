import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black */
  z-index: 998; /* below the popup but above the rest of the content */
`;

const PopupContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  color: #333333;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
  max-width: 400px;
  width: 90%;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessPopup = ({ message, onClose }) => {
  const handleClick = (event) => {
    // Check if the click occurred on the overlay
    if (event.target === event.currentTarget) {
      onClose(); // Close the popup
    }
  };

  return (
    <>
      <Overlay onClick={handleClick} />
      <PopupContainer>
        <p>{message}</p>
        <Button onClick={onClose}>Close</Button>
      </PopupContainer>
    </>
  );
};

export default SuccessPopup;
