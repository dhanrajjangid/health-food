import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import {
  MainDiv,
  LeftArrow,
  ProductContainer,
  DetailImage,
  ProductDetails,
  Title,
  Category,
  Price,
  Description,
  ButtonContainer,
  AdditionalDetails,
  DetailItem,
  RatingContainer,
  Stars,
  RatingCount,
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

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars?.push(
        <AiFillStar key={i} color={i <= rating ? "#FFD700" : "#ccc"} />
      );
    }
    return stars;
  };

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
          <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Category>{productDetails?.category}</Category>
          <RatingContainer>
            <Stars>{renderStars(productDetails?.rating)}</Stars>
            <RatingCount>({productDetails?.ratingCount || 0})</RatingCount>
          </RatingContainer>
          </div>
          <Title>{productDetails?.name}</Title>
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
