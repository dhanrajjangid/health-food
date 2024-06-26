import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoginForm from "../../view/Login";
import SignUp from "@/view/SignUp";
import { ContainedButton } from "../Common/FormInputs";
import { useSelector } from "react-redux";

const Tab = styled.button`
  background: ${({ active }) => (active ? "#fff" : "#1a1a1a")};
  color: ${({ active }) => (active ? "#1a1a1a" : "#fff")};
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  opacity: ;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};

  &:not(:last-child) {
    border-right: 1px solid #ddd;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
  z-index: 100;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
`;

const Popup = styled.div`
  background: #1a1a1a;
  color: #fff;
  padding: 10px;
  max-width: 400px;
  min-width: 330px;
`;

const TabContainerBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: fit-content;
`;

const AuthPopup = ({ setOpenLogin }) => {
  const [activeTab, setActiveTab] = useState("signup");
  const isAuthenticated = useSelector((state) => state.auth.loggedIn);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderForm = () => {
    switch (activeTab) {
      case "login":
        return <LoginForm />;
      case "signup":
        return <SignUp />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Overlay>
        <Popup>
          {isAuthenticated ? (
            <div style={{padding: '2rem'}}>
              <h2 style={{marginBottom: '2rem'}}> Authentication Successful</h2>
              <ContainedButton onClick={() => setOpenLogin(false)}>
                Close
              </ContainedButton>
            </div>
          ) : (
            <>
              <TabContainerBox>
                <Tab
                  active={activeTab === "signup"}
                  onClick={() => handleTabClick("signup")}
                >
                  Sign Up
                </Tab>
                <Tab
                  active={activeTab === "login"}
                  onClick={() => handleTabClick("login")}
                >
                  Login
                </Tab>
              </TabContainerBox>
              {renderForm()}{" "}
            </>
          )}
        </Popup>
      </Overlay>
    </Container>
  );
};

export default AuthPopup;
