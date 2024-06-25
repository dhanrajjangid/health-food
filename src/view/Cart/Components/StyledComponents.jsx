import styled from "styled-components";

const theme = {
  primaryColor: "#3498db",
  dangerColor: "#e74c3c",
  textColor: "#333",
  backgroundColor: "#f8f9fa",
};

export const CartPageContainer = styled.div`
  padding: 20px;
  min-height: 70vh;
`;

export const CartHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
}}`;

export const ProductName = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  color: ${theme.textColor};
`;

export const ProductPrice = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const Quantity = styled.span`
  font-size: 1rem;
`;

export const ProductAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  background-color: ${theme.dangerColor};
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  margin-left: auto;
`;


export const Calculations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;
