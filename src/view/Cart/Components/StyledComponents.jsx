import styled from 'styled-components';

const theme = {
  primaryColor: "#3498db",
  dangerColor: "#e74c3c",
  textColor: "#333",
  backgroundColor: "#f8f9fa"
};

export const CartPageContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: ${theme.backgroundColor};
  border-radius: 10px;
`;

export const CartHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: ${theme.primaryColor};
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 0;
  }
`;

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const ProductName = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${theme.textColor};
`;

export const ProductPrice = styled.span`
  color: ${theme.primaryColor};
  font-size: 1.1rem;
  font-weight: 500;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Quantity = styled.span`
  color: ${theme.textColor};
  font-size: 1rem;
`;

export const DeleteButton = styled.button`
  background-color: ${theme.dangerColor};
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken(${theme.dangerColor}, 10%);
  }

  @media (max-width: 768px) {
    align-self: flex-start;
    margin-top: 10px;
  }
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: 20px;
  border-top: 1px solid #ccc;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${theme.textColor};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const ContainedButton = styled.button`
  background-color: ${theme.primaryColor};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken(${theme.primaryColor}, 10%);
  }
`;
