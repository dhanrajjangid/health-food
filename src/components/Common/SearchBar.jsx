import { AiOutlineClose, AiOutlineLeft, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { TextField } from "@/components/Common/FormInputs";

const LeftArrow = styled(AiOutlineLeft)`
  font-size: 30px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchFeature = ({ isBack, isSearchOpen, setIsSearchOpen }) => {
  const navigate = useNavigate();
  return (
    <SearchBar>
      <LeftArrow onClick={() => navigate("/home")} />

      <TextField borderRadius="5px" />
    </SearchBar>
  );
};
