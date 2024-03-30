import React from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Styled components for the card elements
const CardContainer = styled.div`
  box-sizing: border-box;
  width: 155px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  margin-bottom: 10px;
  padding: 0.2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  mix-blend-mode: multiply;
  border-radius: 15px;

`;

const Name = styled.h5`
  margin: 1px 0;
`;

const Price = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  color: #14c2bf;
  font-size: 25px;
`;

// Card component
const SlideCard = ({ imageSrc, name, price }) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt={name} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.5rem",
        }}
      >
        <div>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </div>
        <CartIcon onClick={() => alert("Added to cart")} /> {/* Cart icon */}
      </div>
    </CardContainer>
  );
};

export default SlideCard;
