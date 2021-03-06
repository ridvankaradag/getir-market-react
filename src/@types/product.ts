export type ProductType = {
  tags: string[];
  price: number;
  name: string;
  description: string;
  slug: string;
  added: string;
  manufacturer: string;
  itemType: string;
};

export type ProductState = {
  isLoading: boolean;
  error: boolean;
  products: ProductType[];
  totalCount: number;
};

export type ProductActionType = {
  productSlug: string;
};
