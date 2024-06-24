import styled, { keyframes, css } from "styled-components";
import { AiOutlineClose, AiOutlineLeft, AiOutlineSearch } from "react-icons/ai";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const LeftArrow = styled(AiOutlineLeft)`
  font-size: 30px;
  cursor: pointer;
  align-self: start;
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 30px;
  cursor: pointer;
  align-self: start;
`;
export const CloseIcon = styled(AiOutlineClose)`
  font-size: 30px;
  cursor: pointer;
  align-self: start;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const AnimatedTextField = styled.div`
  position: absolute;
  right: 50px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${slideIn} 0.4s forwards;
        `
      : css`
          animation: ${slideOut} 0.4s forwards;
        `}
`;

export const TopBar = styled.div`
  width: 100%;
  height: 2rem;
  margin-bottom: 1.5rem;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const DetailImage = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 15px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 250px;
    width: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;

  @media (max-width: 480px) {
    align-items: self-start;
    text-align: left;
  }
`;

export const Category = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 480px) {
    text-align: left;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 480px) {
    text-align: left;
  }
`;

export const Price = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: #333;
`;

export const Description = styled.p`
  margin-left: 0;
  color: #88909f;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const AdditionalDetails = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const DetailItem = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #555;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Stars = styled.div`
  display: flex;
`;

export const RatingCount = styled.span`
  font-size: 1rem;
  color: #555;
`;
