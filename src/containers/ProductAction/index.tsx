import { BasketState } from "../../@types/basket";
import { ProductActionType, ProductState } from "../../@types/product";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ProductAddButton } from "../../components/ProductAddButton";
import { addItem } from "../../features/basket";
import QuantityInputAction from "../QuantityInputAction";

const ProductAction = ({ productSlug }: ProductActionType) => {
  const dispatch = useAppDispatch();

  const { products } = useAppSelector(
    (state: { product: ProductState }) => state.product
  );

  const { items } = useAppSelector(
    (state: { basket: BasketState }) => state.basket
  );

  const checkBasket = () => {
    return items.find((item) => item.slug === productSlug);
  };

  const addToBasket = () => {
    const product = products.find((item) => item.slug === productSlug);
    if (product) {
      const { name, price, slug } = product;
      dispatch(addItem({ name, price, slug, quantity: 1 }));
    }
  };

  if (checkBasket()) {
    return <QuantityInputAction productSlug={productSlug} size="small" />;
  }

  return <ProductAddButton onClick={addToBasket}>Add</ProductAddButton>;
};

export default ProductAction;
