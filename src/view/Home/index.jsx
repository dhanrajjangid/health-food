import React from "react";
import { HomeContainer } from "./Components/StyledComponents";
import { useNavigate } from "react-router-dom";
import TabComponent from "@/components/Common/TabComponent";
import HomeSlider from "./Components/HomeSlider";

const Home = () => {
  const navigate = useNavigate();
  const tabs = ["Featured", "Popular", "Combos"];
  return (
    <HomeContainer>
      <h2 style={{marginBottom: '2rem'}}>Healthy Food</h2>
      <div style={{marginBottom: '2rem'}}>
      <TabComponent tabs={tabs}/>
      </div>
      <HomeSlider style={{overflow: 'hidden'}} />
    </HomeContainer>
  );
};

export default Home;
