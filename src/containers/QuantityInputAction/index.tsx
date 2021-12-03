import { QuantityInputType } from "../../@types/quantity";
import {
  InputWrapper,
  QuantityButton,
  Quantity,
} from "../../components/QuantityInput";
import { ReactComponent as MinusIcon } from "../../assets/minusIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/plusIcon.svg";
import { ReactComponent as TrashIcon } from "../../assets/trashIcon.svg";
import { BasketState } from "../../@types/basket";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../../features/basket";

const QuantityInputAction = ({
  size,
  onIncrease,
  onDecrease,
  productSlug,
}: QuantityInputType) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(
    (state: { basket: BasketState }) => state.basket
  );

  const item = items.find((i) => i.slug === productSlug);

  if (item) {
    return (
      <InputWrapper size={size}>
        <QuantityButton
          onClick={() =>
            dispatch(
              item.quantity > 1
                ? decreaseQuantity(productSlug)
                : removeItem(productSlug)
            )
          }
        >
          {item.quantity > 1 ? <MinusIcon /> : <TrashIcon />}
        </QuantityButton>
        <Quantity size={size}>{item?.quantity}</Quantity>
        <QuantityButton onClick={() => dispatch(increaseQuantity(productSlug))}>
          <PlusIcon />
        </QuantityButton>
      </InputWrapper>
    );
  }

  return null;
};

export default QuantityInputAction;
