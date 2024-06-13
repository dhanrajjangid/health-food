import React, { useEffect, useState } from "react";
import { HomeContainer } from "./Components/StyledComponents";
import { useNavigate } from "react-router-dom";
import TabComponent from "@/components/Common/TabComponent";
import HomeSlider from "./Components/HomeSlider";
import { SearchFeature } from "../../components/Common/SearchBar";

const Home = () => {
  const tabs = ["Featured", "Popular", "New Arrival"];

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <HomeContainer>
      <SearchFeature
        isBack={false}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
      <h2 style={{ marginBottom: "2rem" }}>Crafted with Care</h2>
      <div style={{ marginBottom: "2rem" }}>
        <TabComponent tabs={tabs} />
      </div>
      <HomeSlider style={{ overflow: "hidden" }} />
    </HomeContainer>
  );
};

export default Home;
