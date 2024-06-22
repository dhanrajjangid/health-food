import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import { ContainedButton } from "@/components/Common/FormInputs";
import {
  ButtonContainer,
  Category,
  Description,
  DetailImage,
  Price,
  ProductContainer,
  ProductDetails,
  RatingContainer,
  RatingCount,
  Stars,
  Title,
} from "./StyledComponents";
import { useItemDetail } from "../apiFunctions";
import ImageSlider from "@/components/Common/ImageSlider";
import { useEffect } from "react";

export const ProductContainerBox = ({ setOpenLogin, productDetails }) => {
  const player_id = JSON.parse(localStorage.getItem("user"))?.player_id;
  const { addToCart } = useItemDetail();
  const storedUser = localStorage.getItem("user");
  useEffect(() => {
    if (storedUser) {
      setOpenLogin(false);
    }
  }, [storedUser]);
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars?.push(
        <AiFillStar key={i} color={i <= rating ? "#FFD700" : "#ccc"} />
      );
    }
    return stars;
  };
  const images = [
    productDetails?.imageUrl,
    "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  return (
    <ProductContainer>
      {/* <div> */}
      <ImageSlider images={images} />
      {/* </div> */}
      <ProductDetails>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
              storedUser
                ? addToCart({
                    playerId: player_id,
                    productId: productDetails?._id,
                    quantity: 1,
                  })
                : setOpenLogin(true)
            }
          >
            <AiOutlineShoppingCart />
            <span style={{ marginLeft: "1rem" }}>Add to Cart</span>
          </ContainedButton>
        </ButtonContainer>
      </ProductDetails>
    </ProductContainer>
  );
};
