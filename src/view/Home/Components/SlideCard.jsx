import React from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { truncatedName } from "@/utils";

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
  object-fit: cover;
`;

const Name = styled.h5`
  margin: 1px 0;
  text-overflow: ellipsis;
`;

const Price = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Stars = styled.div`
  display: flex;
`;

const RatingCount = styled.span`
  font-size: 0.7rem;
  color: #555;
`;

// Card component
const SlideCard = ({ imageSrc, name, price, maxCharacters = 50 }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars?.push(
        <AiFillStar
          key={i}
          color={i <= rating ? "#FFD700" : "#ccc"}
          style={{ fontSize: "0.7rem" }}
        />
      );
    }
    return stars;
  };
  return (
    <CardContainer>
      <Image src={imageSrc} alt={name} />
      <div
        style={{
          marginTop: "0.5rem",
        }}
      >
        <Name>{name && truncatedName(name, maxCharacters)}</Name>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "0.3rem",
            gap: "0.5rem",
          }}
        >
          <Price>₹{price}</Price>
          <RatingContainer>
            <Stars>{renderStars(4.5)}</Stars>
            <RatingCount>(2)</RatingCount>
          </RatingContainer>
        </div>
      </div>
    </CardContainer>
  );
};

export default SlideCard;
