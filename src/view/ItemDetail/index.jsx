import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MainDiv, LeftArrow } from "./Components/StyledComponents";
import { useItemDetail } from "./apiFunctions";
import { AdditionalDetailsBox } from "./Components/AdditionalDetailsBox";
import { ProductContainerBox } from "./Components/ProductContainerBox";

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById } = useItemDetail();

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
      <ProductContainerBox productDetails={productDetails} />
      <AdditionalDetailsBox productDetails={productDetails} />
    </MainDiv>
  );
};

export default ItemDetail;
