// SidebarStyles.js
import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 300px;
  box-sizing: border-box;
  height: 100vh;
  background-color: #fff;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.03);

  @media (max-width: 600px) {
    position: absolute;
    left: ${({ isopen }) => (isopen ? 0 : "-300px")};
    transition: left 0.20s ease;
    z-index: 1;
  }
`;

export const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ProfilePhoto = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 2.5em auto 1.5em 2.5em;

  @media (max-width: 600px) {
    margin: 2.5em auto 1.5em 1.5em;
  }
`;

export const SidebarItem = styled.div`
  padding: 0.5em 1em;
  cursor: pointer;
  color: ${({ active }) => (active ? "#fff" : "")};
  background-color: ${({ active }) => (active ? "#14C2BF" : "#fff")};
  // border-radius: 15px;
  margin: 0.15em 1.5em;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f4f4f4;
  }
`;

export const Icon = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const LogoutButton = styled(SidebarItem)`
  cursor: pointer;
  margin-top: auto; /* Aligns to the bottom */
  margin-bottom: 100px; /* Add some spacing */
  margin-left: 1.5em; /* Adjust the left margin */
  background-color: #fff;
  &:hover {
    background-color: #f4f4f4; /* Match hover effect */
  }
`;
