export interface QuantityType {
  size?: "large" | "small";
}

export interface QuantityInputType extends QuantityType {
  onIncrease?: void;
  onDecrease?: void;
  productSlug: string;
}
