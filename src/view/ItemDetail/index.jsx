import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {
  flexSpaceBetween,
  CaloriesCard,
  DetailImage,
  LeftArrow,
  MainDiv,
  ButtonContainer,
} from "./Components/StyledComponents";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  OutlinedButton,
  ContainedButton,
} from "../../components/Common/FormInputs";
const ItemDetail = () => {
  const navigate = useNavigate();
  return (
    <MainDiv>
      <LeftArrow onClick={() => navigate("/home")} />{" "}
      <DetailImage
        src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="ABC"
      />
      <div style={flexSpaceBetween}>
        <h3>Fried Masala Paneer</h3>
        <h3 style={{ fontWeight: 400 }}>$99.99</h3>
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          padding: "0.5rem",
        }}
      >
        <CaloriesCard>
          <h3 style={{ color: "#88909F" }}>Calories</h3>
          <h2>567</h2>
          <hr style={{ width: "100%", margin: "auto" }} />
          <h2>30%</h2>
        </CaloriesCard>
        <CaloriesCard>
          <h3 style={{ color: "#88909F" }}>Sugar</h3>
          <h2>567</h2>
          <hr style={{ width: "100%", margin: "auto" }} />
          <h2>20%</h2>
        </CaloriesCard>
        <CaloriesCard>
          <h3 style={{ color: "#88909F" }}>Protein</h3>
          <h2>567</h2>
          <hr style={{ width: "100%", margin: "auto" }} />
          <h2>50%</h2>
        </CaloriesCard>
      </div>
      <hr style={{ width: "100%", boxSizing: "border-box" }} />
      <p
        style={{
          textAlign: "center",
          boxSizing: "border-box",
          color: "#88909F",
          padding: "0.5rem",
        }}
      >
        This is the details part of this food and we are commited to provide you
        the best healthy food with the affordable range available for you in
        this city.
      </p>

        <ButtonContainer>
          <OutlinedButton 
            style={{
              gridColumn: 'span 3',
              padding: 0
            }}>
            <AiOutlineHeart />
          </OutlinedButton>
          <ContainedButton style={{gridColumn: 'span 9'}}>
            <AiOutlineShoppingCart />
            <span style={{marginLeft: '1rem'}}>Add to Cart</span>
          </ContainedButton>
        </ButtonContainer>
    </MainDiv>
  );
};

export default ItemDetail;
