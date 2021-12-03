import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Product from "../../components/Product";
import Pagination from "../Pagination";
import TagList from "../TagList";
import { ProductsWrapper } from "./ProductsWrapper";
import { SectionTitle } from "./SectionTitle";
import { ProductState } from "../../@types/product";
import { getProducts } from "../../utils/services";
import {
  getProductsSuccess,
  hasError,
  startLoading,
} from "../../features/product";
import { FilterState } from "../../@types/filter";
import { queryParamsGenerator } from "../../utils/query";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state: { product: ProductState }) => state.product
  );

  const {
    currentPage,
    selectedBrands,
    selectedTags,
    selectedItemType,
    selectedSort,
  } = useAppSelector((state: { filter: FilterState }) => state.filter);

  console.log(products, isLoading, error);

  console.log(products);
  useEffect(() => {
    (async function init() {
      dispatch(startLoading());
      const { error, data } = await getProducts(
        queryParamsGenerator({
          currentPage,
          selectedBrands,
          selectedTags,
          selectedItemType,
          selectedSort,
        })
      );
      if (error) {
        dispatch(hasError(data));
      } else {
        dispatch(getProductsSuccess(data));
      }
    })();
  }, [
    dispatch,
    currentPage,
    selectedBrands,
    selectedTags,
    selectedItemType,
    selectedSort,
  ]);
  return (
    <>
      <SectionTitle>Products</SectionTitle>
      <TagList />
      <ProductsWrapper>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </ProductsWrapper>
      <Pagination />
    </>
  );
};

export default ProductList;
