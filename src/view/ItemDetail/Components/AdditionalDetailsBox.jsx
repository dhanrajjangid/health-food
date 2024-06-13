import { AdditionalDetails, DetailItem } from "./StyledComponents";

export const AdditionalDetailsBox = ({ productDetails }) => {
  return (
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
  );
};
