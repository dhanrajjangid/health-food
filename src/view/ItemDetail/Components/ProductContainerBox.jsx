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
    "https://ae01.alicdn.com/kf/S5af46917104f45cdbe66770e0467369ck.jpg_640x640Q90.jpg_.webp",

    "https://ae01.alicdn.com/kf/Sc2220e9ac2384419aeb205f7866691879.jpg_640x640Q90.jpg_.webp",

    "https://ae01.alicdn.com/kf/Sb38f68ad5455494899c8516d6a7219fep.jpg_640x640Q90.jpg_.webp",

    "https://ae01.alicdn.com/kf/Sc35f01cd346943b3a3ef78160ca1c5f6j.jpg_640x640Q90.jpg_.webp",

    "https://ae01.alicdn.com/kf/S6dfd02b1be8f4477ad9f52adbebe4e62H.jpg_640x640Q90.jpg_.webp",

    "https://ae01.alicdn.com/kf/S7dfa47892e424c60a1a94c785732a3e21.jpg_640x640Q90.jpg_.webp",

    "https://ae01.alicdn.com/kf/Sb72342cba0f346b39967d41da16412a4n.jpg_640x640Q90.jpg_.webp",
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
