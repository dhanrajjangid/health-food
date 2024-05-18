import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  MainDiv,
  LeftArrow,
  ProductContainer,
  DetailImage,
  ProductDetails,
  Title,
  Price,
  Description,
  ButtonContainer,
  AdditionalDetails,
  DetailItem,
} from "./Components/StyledComponents";
import { ContainedButton } from "../../components/Common/FormInputs";
import { actions } from "@/redux/slices/listingSlice";

const ItemDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({
    id: 1,
    image:
      "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Sample Product",
    category: "Food",
    description:
      "This is a delicious and healthy food item, perfect for any meal. It's made with high-quality ingredients to ensure the best taste and nutritional value.",
    price: 10.99,
    dimensions: "10x10x5 cm",
    length: "10 cm",
    manufacturer: "Healthy Foods Co.",
    color: "Natural",
    material: "Organic ingredients",
  });

  const addToCart = () => {
    dispatch(actions.setCartState(productDetails));
    toast.success("Item Added to cart");
  };

  return (
    <MainDiv>
      <LeftArrow onClick={() => navigate("/home")} />
      <ProductContainer>
        <DetailImage
          src={
            productDetails?.image ||
            "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={productDetails?.name}
        />
        <ProductDetails>
          <Title>Category: {productDetails?.category}</Title>
          <Title>Product Name: {productDetails?.name}</Title>
          <Description>
            {productDetails?.description ||
              "This is the details part of this food and we are committed to providing you with the best healthy food at an affordable range available in this city."}
          </Description>
          <Price>₹{productDetails?.price}</Price>
          <ButtonContainer>
            <ContainedButton onClick={addToCart}>
              <AiOutlineShoppingCart />
              <span style={{ marginLeft: "1rem" }}>Add to Cart</span>
            </ContainedButton>
          </ButtonContainer>
        </ProductDetails>
      </ProductContainer>
      <AdditionalDetails>
        <DetailItem>
          <strong>Dimensions:</strong> {productDetails?.dimensions}
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
    </MainDiv>
  );
};

export default ItemDetail;
