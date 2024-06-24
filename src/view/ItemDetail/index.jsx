import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MainDiv,
  LeftArrow,
  TopBar,
  SearchIcon,
  CloseIcon,
  AnimatedTextField,
} from "./Components/StyledComponents";
import { useItemDetail } from "./apiFunctions";
import { ProductContainerBox } from "./Components/ProductContainerBox";
import { TextField } from "@/components/Common/FormInputs";
import AuthPopup from "@/components/AuthPopup";
import Description from "./Components/Description";
import Reviews from "./Components/Reviews";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById } = useItemDetail();

  const [productDetails, setProductDetails] = useState({});
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

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
    <>
      <MainDiv>
        {openLogin && <AuthPopup setOpenLogin={setOpenLogin} />}
        <TopBar>
          <LeftArrow onClick={() => navigate("/home")} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <AnimatedTextField isVisible={isSearchOpen}>
              {isSearchOpen && <TextField borderRadius="10px" />}
            </AnimatedTextField>
            {isSearchOpen ? (
              <CloseIcon onClick={() => setIsSearchOpen(false)} />
            ) : (
              <SearchIcon onClick={() => setIsSearchOpen(true)} />
            )}
          </div>
        </TopBar>
        <ProductContainerBox
          setOpenLogin={setOpenLogin}
          productDetails={productDetails}
        />
      </MainDiv>
      <Description productDetails={productDetails} />
      <Reviews />
    </>
  );
};

export default ItemDetail;
