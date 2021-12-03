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
import Loading from "../../components/Loading";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector(
    (state: { product: ProductState }) => state.product
  );

  const {
    currentPage,
    selectedBrands,
    selectedTags,
    selectedItemType,
    selectedSort,
  } = useAppSelector((state: { filter: FilterState }) => state.filter);

  useEffect(() => {
    (async function init() {
      dispatch(startLoading());
      const { error, data, totalCount } = await getProducts(
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
        dispatch(getProductsSuccess({ data, totalCount }));
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

  if (isLoading) {
    return <Loading />;
  }
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
