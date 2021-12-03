import styled from "styled-components";
import { ProductState } from "../../@types/product";
import { useAppSelector } from "../../app/hooks";

const PaginationWrapper = styled.div``;

const Pagination = () => {
  const { products, isLoading, error, totalCount } = useAppSelector(
    (state: { product: ProductState }) => state.product
  );

  return <PaginationWrapper></PaginationWrapper>;
};

export default Pagination;
