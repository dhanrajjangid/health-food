import React from "react";
import SlideCard from "./SlideCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { products } from "../../../utils/productData";

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
      {products?.map((item, index) => {
        return (
            
            <div onClick={()=> navigate(`/item-detail/${item?.id}`)}>
          <SlideCard
            imageSrc="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            name={item?.name}
            price={item?.price} // Assuming price is passed as a string
          />
          </div>
        );
      })}
    </HomeItems>
  );
};

export default HomeSlider;
