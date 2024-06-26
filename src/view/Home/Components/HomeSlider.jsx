import React, { useState, useEffect } from "react";
import SlideCard from "./SlideCard";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useHome } from "../apiFunctions";

const HomeItems = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

const HomeSlider = () => {
  const navigate = useNavigate();
  const {getProducts} = useHome();

  const [products, setProducts] = useState([]);
  const getProductList = async () => {
    try {
      const response = await getProducts();
      setProducts(response?.products);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <HomeItems>
      {products?.slice(0,1)?.map((item, index) => {
        return (
          <div onClick={() => navigate(`/item-detail/${item?._id}`)}>
            <SlideCard
              imageSrc={
                item?.imageUrl ||
                "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
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
