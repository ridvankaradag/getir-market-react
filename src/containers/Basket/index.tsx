import styled from "styled-components";
import Button from "../../components/Button";
import ProductShort from "../../components/ProductShort";
import QuantityInput from "../../components/QuantityInput";

const Wrapper = styled.div`
  border: 8px solid;
  border-color: ${(props) => props.theme.colors.primary};
  padding: 16px;
`;

const ProductShortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 2px solid;
  border-bottom-color: ${(props) => props.theme.colors.grayLightest};
  &:not(:first-child) {
    padding-top: 16px;
  }
`;

const CheckoutButton = styled(Button)`
  margin-left: auto;
  margin-top: 16px;
  display: block;
  padding: 17px 24px;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: ${(props) => props.theme.lineHeights.xsmall};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;

const BasketContainer = () => (
  <Wrapper>
    <ProductShortWrapper>
      <ProductShort />
      <QuantityInput />
    </ProductShortWrapper>
    <ProductShortWrapper>
      <ProductShort />
      <QuantityInput />
    </ProductShortWrapper>
    <ProductShortWrapper>
      <ProductShort />
      <QuantityInput />
    </ProductShortWrapper>
    <CheckoutButton>₺19.98</CheckoutButton>
  </Wrapper>
);

export default BasketContainer;
