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
    "https://ae01.alicdn.com/kf/S02812e76fce84737b87df5b912e0b8a87/Aquafina-Water-Bottle-Diversion-Safe-Can-Stash-Hidden-Security-Container-With-A-Food-Grade-Smell-Proof.jpg_.webp",

    "https://ae01.alicdn.com/kf/S5d2a11a63830455fa36de87808b6c4acz/Aquafina-Water-Bottle-Diversion-Safe-Can-Stash-Hidden-Security-Container-With-A-Food-Grade-Smell-Proof.jpg_.webp",

    "https://ae01.alicdn.com/kf/S252492ab3b3e48688085f3609cdfe331e/Aquafina-Water-Bottle-Diversion-Safe-Can-Stash-Hidden-Security-Container-With-A-Food-Grade-Smell-Proof.jpg_.webp",

    "https://ae01.alicdn.com/kf/S0d206777cdab4ca59e7a326c8ba0e5924/Aquafina-Water-Bottle-Diversion-Safe-Can-Stash-Hidden-Security-Container-With-A-Food-Grade-Smell-Proof.jpg_.webp",

    
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
            <Stars>{renderStars(productDetails?.rating || 4.5)}</Stars>
            <RatingCount>({productDetails?.ratingCount || 2})</RatingCount>
          </RatingContainer>
        </div>
        <Title>{productDetails?.name}</Title>
        <Description>
          {productDetails?.description ||
            "This is the details part of this food and we are committed to providing you with the best healthy food at an affordable range available in this city."}
        </Description>
        <Description>In Stock: {productDetails?.stockQuantity}</Description>
        <Price>${productDetails?.price}</Price>
        <ButtonContainer>
          <ContainedButton
            disabled={!(productDetails?.stockQuantity > 0)}
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
            <span style={{ marginLeft: "1rem" }}>
              {productDetails?.stockQuantity > 0
                ? "Add to Cart"
                : "Out of Stock"}
            </span>
          </ContainedButton>
        </ButtonContainer>
      </ProductDetails>
    </ProductContainer>
  );
};
