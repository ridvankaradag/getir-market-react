import styled from "styled-components";
import { ProductType } from "../@types/product";
import { getImageUrl } from "../utils/image";
import { PrimaryButton } from "./Button";

const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  padding: 16px;
  margin-bottom: 8px;
`;
const ProductImage = styled.img`
  max-width: 100%;
`;
const ProductPrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.medium};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.primary};
`;

const ProductCurrency = styled(ProductPrice)`
  font-weight: ${(props) => props.theme.fontWeights.regular};
`;
const ProductName = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: ${(props) => props.theme.lineHeights.medium};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 8px;
`;
const ProductAddButton = styled(PrimaryButton)`
  height: 22px;
  margin-top: auto;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: ${(props) => props.theme.lineHeights.medium};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.white};
`;

type ProductProps = {
  product: ProductType;
};
const Product = ({ product }: ProductProps) => (
  <ProductWrapper>
    <ProductImageWrapper>
      <ProductImage src={getImageUrl()} />
    </ProductImageWrapper>
    <ProductPrice>
      <ProductCurrency>₺</ProductCurrency> {product.price}
    </ProductPrice>
    <ProductName>{product.name}</ProductName>
    <ProductAddButton block>Add</ProductAddButton>
  </ProductWrapper>
);

export default Product;
