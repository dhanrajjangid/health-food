import React from "react";
import SlideCard from "./SlideCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomeItems = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media(max-width: 600px){
    justify-content: space-between;
  }
`;

const HomeSlider = () => {
  const navigate = useNavigate()
  return (
    <HomeItems>
      {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map(() => {
        return (
            
            <div onClick={()=> navigate('/item-detail')}>
          <SlideCard
            imageSrc="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name="Spiced Sprouts"
            price="9.99" // Assuming price is passed as a string
          />
          </div>
        );
      })}
    </HomeItems>
  );
};

export default HomeSlider;
