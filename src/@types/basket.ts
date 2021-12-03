export type BasketItemType = {
  name: string;
  quantity: number;
  slug: string;
  price: number;
};

export type BasketState = {
  items: BasketItemType[];
};
