import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ProductTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: ${(props) => props.theme.letterSpacings.medium};
  color: ${(props) => props.theme.colors.black};
`;
const ProductPrice = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: ${(props) => props.theme.lineHeights.xsmall};
  letter-spacing: ${(props) => props.theme.letterSpacings.medium};
  color: ${(props) => props.theme.colors.primary};
`;
const ProductShort = () => (
  <Wrapper>
    <ProductTitle>Example Product</ProductTitle>
    <ProductPrice>₺14,99</ProductPrice>
  </Wrapper>
);

export default ProductShort;
