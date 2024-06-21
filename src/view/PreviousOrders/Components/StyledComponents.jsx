import styled from "styled-components";

const theme = {
  primaryColor: "#3498db",
  dangerColor: "#e74c3c",
  textColor: "#333",
  backgroundColor: "#f8f9fa",
};

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  display: flex;
  padding: 10px 0;
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid #ccc;
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
  font-size: 0.8rem;
  font-weight: 600;
`;

export const Quantity = styled.span`
  font-size: 1rem;
`;

export const EstimateDelivery = styled.span`
  color: #0c670c;
`;


export const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  color: #333;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  box-sizing: border-box;
`;

export const TopBox = styled.div`
  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 10px;
  max-width: 500px;
  width: 100%;
`;

export const Box = styled.div`
  background: #1a1a1a;
  color: #fff;
  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  flex-direction: column;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  max-width: 500px;
  width: 100%;
`;

export const DetailText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const Item = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const SummaryItem = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  font-weight: ${(props) => (props.isBold ? "bold" : "normal")};
`;