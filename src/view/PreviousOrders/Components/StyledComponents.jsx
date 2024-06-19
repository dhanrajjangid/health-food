import styled from "styled-components";

const theme = {
  primaryColor: "#3498db",
  dangerColor: "#e74c3c",
  textColor: "#333",
  backgroundColor: "#f8f9fa",
};

export const StyledOrderItem = styled.div`
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
  font-size: 0.7rem;
  font-weight: 600;
`;

export const Quantity = styled.span`
  font-size: 1rem;
`;

export const EstimateDelivery = styled.span`
  color: #0c670c;
`;
