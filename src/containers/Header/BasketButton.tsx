import styled from "styled-components";
import { BasketState } from "../../@types/basket";
import { useAppSelector } from "../../app/hooks";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shoppingCart.svg";
import { calculateBasketAmount } from "../../utils/price";

const Basket = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primaryDark};
  margin-left: auto;
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 129px;
  @media screen and (max-width: ${(props) =>
      props.theme.breakpoints.mobileLarge}) {
    position: static;
  }
`;

const BasketPrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: ${(props) => props.theme.letterSpacings.medium};
`;

const BasketButton = () => {
  const { items } = useAppSelector(
    (state: { basket: BasketState }) => state.basket
  );
  return (
    <Basket>
      <ShoppingCartIcon />
      <BasketPrice>₺ {calculateBasketAmount(items)}</BasketPrice>
    </Basket>
  );
};

export default BasketButton;
