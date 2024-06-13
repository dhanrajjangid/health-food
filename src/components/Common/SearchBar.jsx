import { AiOutlineClose, AiOutlineLeft, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { TextField } from "@/components/Common/FormInputs";

const LeftArrow = styled(AiOutlineLeft)`
  font-size: 30px;
  cursor: pointer;
  align-self: start;
`;

const SearchIcon = styled(AiOutlineSearch)`
  font-size: 30px;
  cursor: pointer;
  align-self: start;
`;
const CloseIcon = styled(AiOutlineClose)`
  font-size: 30px;
  cursor: pointer;
  align-self: start;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const AnimatedTextField = styled.div`
  position: absolute;
  right: 50px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  ${({ isVisible }) =>
    isVisible
      ? css`
          animation: ${slideIn} 0.4s forwards;
        `
      : css`
          animation: ${slideOut} 0.4s forwards;
        `}

  @media (max-width: 480) {
    width: -webkit-fill-available;
  }
`;

const SearchBar = styled.div`
  width: 100%;
  height: 2rem;
  margin-bottom: 1.5rem;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const FieldContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${({ isBack }) =>
    !isBack &&
    css`
      justify-content: flex-end;
    `};
`;

export const SearchFeature = ({ isBack, isSearchOpen, setIsSearchOpen }) => {
  const navigate = useNavigate();
  return (
    <SearchBar>
      {isBack && <LeftArrow onClick={() => navigate("/home")} />}
      <FieldContent isBack={isBack}>
        {isSearchOpen && (
          <AnimatedTextField isVisible={isSearchOpen}>
            <TextField borderRadius="10px" />
          </AnimatedTextField>
        )}
        {isSearchOpen ? (
          <CloseIcon onClick={() => setIsSearchOpen(false)} />
        ) : (
          <SearchIcon onClick={() => setIsSearchOpen(true)} />
        )}
      </FieldContent>
    </SearchBar>
  );
};
