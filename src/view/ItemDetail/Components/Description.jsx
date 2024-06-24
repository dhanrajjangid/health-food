import React, { useState } from "react";
import { AdditionalDetails, DetailItem } from "./StyledComponents";
import styled from "styled-components";

const Description = ({ productDetails }) => {
  const [activeTab, setActiveTab] = useState("specifications");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <DescriptionContainer>
      <h2 style={{ marginBottom: "1rem" }}>Product Description</h2>
      <TabsContainer>
        <TabButton
          onClick={() => handleTabChange("specifications")}
          active={activeTab === "specifications"}
        >
          Specifications
        </TabButton>
        <TabButton
          onClick={() => handleTabChange("howToUse")}
          active={activeTab === "howToUse"}
        >
          How to Use
        </TabButton>
      </TabsContainer>
      <TabContent>
        {activeTab === "specifications" && (
          <AdditionalDetails>
            <DetailItem>
              <strong>Dimensions:</strong> {productDetails?.dimensions?.length || ' (L x W x H) = (3.9 x 3.9 x 10.0) Inch.'}
            </DetailItem>
            <DetailItem>
              <strong>Color:</strong> {productDetails?.color}
            </DetailItem>
            <DetailItem>
              <strong>Material:</strong> {productDetails?.material}
            </DetailItem>
            <DetailItem>
              <strong>Manufacturer:</strong> {productDetails?.manufacturer}
            </DetailItem>
          </AdditionalDetails>
        )}
        {activeTab === "howToUse" && (
          <p>Place it on a shelf, mantelpiece, or side table to add aesthetic appeal to your living room,
             bedroom, or any other suitable space.</p>
        )}
      </TabContent>
    </DescriptionContainer>
  );
};

const DescriptionContainer = styled.div`
  padding: 10px;
`;

const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const TabButton = styled.button`
  background-color: ${(props) => (props.active ? "#f0f0f0" : "transparent")};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const TabContent = styled.div`
  min-height: 180px;
  h3 {
    margin-bottom: 5px;
  }
  p {
    margin-top: 0;
    line-height: 1.6;
  }
`;

export default Description;
