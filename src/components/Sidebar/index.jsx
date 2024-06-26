// Sidebar.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineUserAdd,
  AiOutlineAppstore,
  AiOutlineTeam,
  AiOutlineScan,
  AiOutlineBook,
  AiOutlineUser as AiOutlineUserProfile,
  AiOutlineLogout,
} from "react-icons/ai";
import ProfileImg from "@/assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";
import { actions } from "@/redux/slices/sidebarSlice";
import {
  SidebarContainer,
  SidebarNav,
  ProfilePhoto,
  SidebarItem,
  Icon,
  LogoutButton,
} from "./SidebarStyles";
import { actions as authActions } from "@/redux/slices/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.sidebar.open);
  const pathname = window.location.pathname;
  const storedUser = localStorage.getItem("user");

  const handleNavigation = (path) => {
    navigate(path);
    dispatch(actions.toggleSidebar(!isOpen));
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    dispatch(actions.toggleSidebar(false));
    navigate('/login')
  };

  const menuItems = [
    {
      title: "Home",
      path: "/home",
      icon: <AiOutlineHome />,
    },
    {
      title: "Cart",
      path: "/cart",
      icon: <AiOutlineShoppingCart />,
    },
    {
      title: "My Orders",
      path: "/order-history",
      icon: <AiOutlineBook />,
    },
    {
      title: "Profile",
      path: "/profile",
      icon: <AiOutlineUserProfile />,
    }
  ];

  const guestMenu = [
    {
      title: "Home",
      path: "/home",
      icon: <AiOutlineHome />,
    },
    {
      title: "Cart",
      path: "/cart",
      icon: <AiOutlineShoppingCart />,
    },
    {
      title: "Login",
      path: "/login",
      icon: <AiOutlineBook />,
    },
    {
      title: "Sign Up",
      path: "/signup",
      icon: <AiOutlineUserProfile />,
    }
  ];

  return (
    <SidebarContainer isopen={isOpen}>
      <SidebarNav>
        <div className="flex-center">
          <ProfilePhoto src={ProfileImg} alt="Profile" />
        </div>
        {(storedUser ? menuItems : guestMenu)?.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              active={pathname === item.path ? true : false}
              onClick={() => handleNavigation(item.path)}
            >
              <Icon>{item.icon}</Icon>
              {item.title}
            </SidebarItem>
          );
        })}
        {storedUser && <LogoutButton onClick={handleLogout}>
          <Icon>
            <AiOutlineLogout />
          </Icon>
          Logout
        </LogoutButton>}
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
