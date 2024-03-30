import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  gap: 30px;
  position: relative;
`;

const Tab = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  font-weight: ${({ isSelected }) => (isSelected ? '600' : '300')};
  position: relative;

  &::after {
    content: '';
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background-color: #14C2BF;
    border-radius: 50%;
  }
`;

const TabComponent = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <TabsContainer>
      {tabs?.map((tab, index) => (
        <Tab
          key={index}
          isSelected={index === selectedTab}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </Tab>
      ))}
    </TabsContainer>
  );
};

export default TabComponent;
