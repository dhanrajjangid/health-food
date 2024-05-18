import React, { useEffect } from "react";
import { HomeContainer } from "./Components/StyledComponents";
import { useNavigate } from "react-router-dom";
import TabComponent from "@/components/Common/TabComponent";
import HomeSlider from "./Components/HomeSlider";

const Home = () => {
  const navigate = useNavigate();
  const tabs = ["Featured", "Popular", "New Arrival"];


  return (
    <HomeContainer>
      <h2 style={{marginBottom: '2rem'}}>Rental Dresses</h2>
      <div style={{marginBottom: '2rem'}}>
      <TabComponent tabs={tabs}/>
      </div>
      <HomeSlider style={{overflow: 'hidden'}} />
    </HomeContainer>
  );
};

export default Home;
