import styled from "styled-components";
import Pagination from "rc-pagination";
import { ProductState } from "../../@types/product";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FilterState } from "../../@types/filter";
import { changePage } from "../../features/filter";
import { ReactComponent as LeftArrowIcon } from "../../assets/leftArrowIcon.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/rightArrowIcon.svg";
import { useEffect } from "react";

const PaginationWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationList = styled(Pagination)`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  padding: 0 6px;
  & li:first-child {
    margin-right: auto;
  }
  & li.rc-pagination-next {
    margin-left: auto;
  }

  @media screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobileLarge}) {
    padding: 0 36px;
  }
`;

const PaginationItem = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  line-height: ${(props) => props.theme.lineHeights.xsmall};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.grayMedium};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  display: flex;
  align-items: center;
`;

const PrevNextPaginationItem = styled(PaginationItem)`
  color: ${(props) => props.theme.colors.primary};
`;

const PaginationItemActive = styled(PaginationItem)`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 12px;
  border-radius: 2px;
  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

const PrevNextItem = styled.span`
  display: flex;
  gap: 12px;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
`;

const PaginationContainer = () => {
  const dispatch = useAppDispatch();
  const { totalCount } = useAppSelector(
    (state: { product: ProductState }) => state.product
  );

  const { currentPage } = useAppSelector(
    (state: { filter: FilterState }) => state.filter
  );

  useEffect(() => {
    if (Math.ceil(totalCount / 16) < currentPage) {
      dispatch(changePage(1));
    }
  }, [dispatch, totalCount, currentPage]);

  const itemRender = (current: number, type: any, element: any) => {
    if (type === "prev") {
      return (
        <PrevNextItem>
          <LeftArrowIcon />{" "}
          <PrevNextPaginationItem>Prev</PrevNextPaginationItem>
        </PrevNextItem>
      );
    }
    if (type === "next") {
      return (
        <PrevNextItem>
          <PrevNextPaginationItem>Next</PrevNextPaginationItem>
          <RightArrowIcon />
        </PrevNextItem>
      );
    }

    if (type === "page") {
      if (current === currentPage) {
        return <PaginationItemActive>{current}</PaginationItemActive>;
      } else {
        return <PaginationItem>{current}</PaginationItem>;
      }
    }

    if (["jump-prev", "jump-next"].includes(type)) {
      return <PaginationItem>...</PaginationItem>;
    }
    return element;
  };

  return (
    <PaginationWrapper>
      <PaginationList
        onChange={(page) => dispatch(changePage(page))}
        total={totalCount}
        current={currentPage}
        pageSize={16}
        itemRender={itemRender}
        showTitle={false}
      />
    </PaginationWrapper>
  );
};

export default PaginationContainer;
