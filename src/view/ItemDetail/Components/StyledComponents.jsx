import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const LeftArrow = styled(AiOutlineLeft)`
  position: fixed;
  font-size: 30px;
  cursor: pointer;
  align-self: start;
  margin: 1rem;
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
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
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
  max-width: 1200px;
  padding: 2rem;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const DetailItem = styled.p`
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #555;
`;
