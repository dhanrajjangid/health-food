import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { products } from "../../utils/productData";
import { useDispatch } from "react-redux";
import { actions } from "@/redux/slices/listingSlice";
import { toast } from "react-toastify";
const ItemDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    if (products?.length && id) {
      const filteredProducts = products.find(
        (product) => product.id === Number(id)
      );
      // const data = products?.filter(product => product.id === id);
      setProductDetails(filteredProducts);
    }
  }, [products, id]);
  const addToCart = () => {
    dispatch(actions.setCartState(productDetails));
    toast.success("Item Added to cart");
  };

  return (
    <MainDiv>
      <LeftArrow onClick={() => navigate("/home")} />{" "}
      <DetailImage
        src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="ABC"
      />
      <div style={flexSpaceBetween}>
        <h3>{productDetails?.name}</h3>
        <h3 style={{ fontWeight: 400 }}>${productDetails?.price}</h3>
      </div>
      {/* <div
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
      </div> */}
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
        
        <ContainedButton
          style={{ width: "100%" }}
          onClick={() => addToCart()}
        >
          <AiOutlineShoppingCart />
          <span style={{ marginLeft: "1rem" }}>Add to Cart</span>
        </ContainedButton>
      </ButtonContainer>
    </MainDiv>
  );
};

export default ItemDetail;
