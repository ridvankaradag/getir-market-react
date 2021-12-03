import { BasketItemType } from "../@types/basket";

export const calculateBasketAmount = (items: BasketItemType[]) => {
  const totalAmount = items
    .reduce(
      (prevItem, currItem) => prevItem + currItem.quantity * currItem.price,
      0
    )
    .toFixed(2);
  return totalAmount;
};
