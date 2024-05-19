import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
import { useItemDetail } from "./apiFunctions";

const ItemDetail = () => {
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, addToCart } = useItemDetail();

  const [productDetails, setProductDetails] = useState({});

  const getProduct = async (id) => {
    try {
      const response = await getProductById(id);
      setProductDetails(response?.product);
    } catch {
      console.error("error fetching product details");
    }
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <MainDiv>
      <LeftArrow onClick={() => navigate("/home")} />
      <ProductContainer>
        <DetailImage
          src={
            productDetails?.imageUrl ||
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
          <Description>In Stock: {productDetails?.stockQuantity}</Description>
          <Price>₹{productDetails?.price}</Price>
          <ButtonContainer>
            <ContainedButton
              onClick={() =>
                addToCart({
                  playerId: player_id,
                  productId: id,
                  quantity: 1,
                })
              }
            >
              <AiOutlineShoppingCart />
              <span style={{ marginLeft: "1rem" }}>Add to Cart</span>
            </ContainedButton>
          </ButtonContainer>
        </ProductDetails>
      </ProductContainer>
      <AdditionalDetails>
        <DetailItem>
          <strong>Dimensions:</strong> {productDetails?.dimensions?.length}
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
