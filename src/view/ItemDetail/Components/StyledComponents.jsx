import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftArrow = styled(AiOutlineLeft)`
  position: fixed;
  font-size: 30px;
  cursor: pointer;
  align-self: start;
  margin-bottom: 5px;
`;

export const DetailImage = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 2rem;
  margin-top: 3rem;
  border-radius: 15px;
`;

export const CaloriesCard = styled.div`
  box-sizing: border-box;
  width: 100px;
  border: 0.5px solid #88909f;
  padding: 10px 15px;
  box-sizing: border-box;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const flexSpaceBetween = {
    boxSizing: 'border-box',
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  };

  export const ButtonContainer = styled.div`
  width: calc(100% - 40px);
  position: fixed;
  bottom: 30px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  place-content: center;
`;