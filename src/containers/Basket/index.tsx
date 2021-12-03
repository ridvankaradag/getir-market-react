import styled from "styled-components";
import { BasketState } from "../../@types/basket";
import { useAppSelector } from "../../app/hooks";
import Button from "../../components/Button";
import ProductShort from "../../components/ProductShort";
import { calculateBasketAmount } from "../../utils/price";
import QuantityInputAction from "../QuantityInputAction";

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

const BasketContainer = () => {
  const { items } = useAppSelector(
    (state: { basket: BasketState }) => state.basket
  );

  return (
    <Wrapper>
      {items.map((item) => (
        <ProductShortWrapper key={item.slug}>
          <ProductShort product={item} />
          <QuantityInputAction productSlug={item.slug} />
        </ProductShortWrapper>
      ))}
      <CheckoutButton>₺{calculateBasketAmount(items)}</CheckoutButton>
    </Wrapper>
  );
};

export default BasketContainer;
