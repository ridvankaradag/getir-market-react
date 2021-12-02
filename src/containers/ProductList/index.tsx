import styled from "styled-components";
import Product from "../../components/Product";
import TagList from "../TagList";

const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.xlarge};
  letter-spacing: ${(props) => props.theme.letterSpacings.large};
  color: ${(props) => props.theme.colors.grayDarkest};
`;

const ProductsWrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const ProductList = () => (
  <>
    <SectionTitle>Products</SectionTitle>
    <TagList />
    <ProductsWrapper>
      {Array(16)
        .fill(Math.random())
        .map(() => (
          <Product />
        ))}
    </ProductsWrapper>
  </>
);

export default ProductList;
