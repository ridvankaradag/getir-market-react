import styled from "styled-components";

export const ProductsWrapper = styled.div`
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
