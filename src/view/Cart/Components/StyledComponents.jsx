import styled from 'styled-components';

export const CartPageContainer = styled.div`
  padding: 20px;
`;

export const CartItem = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled.span`
  font-weight: bold;
`;

export const TotalPrice = styled.div`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: darkred;
  }
`;
