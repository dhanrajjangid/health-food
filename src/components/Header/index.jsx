import React, { useState } from "react";
import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  box-sizing: border-box;
  height: 5vh;
  color: #0d0d0d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  padding: 25px 20px;
  background: #fff;
  border: none;
  border-radius: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 5px 20px;
  }
`;

const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Add space between One Life and Menu Button */
  
  @media (max-width: 768px) {
    width: 100%;  
  }
`;

const CompanyName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 20px;
  color: #4a4a4a;
`;

const MenuButton = styled.button`
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
    transition: max-height 0.3s ease-in-out;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: inherit;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.sidebar.open);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer className={isOpen ? "no-shrink" : ""}>
      <CompanyContainer>
        <CompanyName>Minimal React</CompanyName>
        <MenuButton onClick={toggleMenu}>
          <MdMenu style={{ cursor: "pointer" }} size={32} />
        </MenuButton>
      </CompanyContainer>
      <Menu isOpen={menuOpen}>
        <MenuItem
          onClick={() => {
            navigate("/");
            toggleMenu();
          }}
        >
          Home
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/login");
            toggleMenu();
          }}
        >
          Login
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/signup");
            toggleMenu();
          }}
        >
          Sign Up
        </MenuItem>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
