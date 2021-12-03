import styled from "styled-components";

export const Container = styled.div`
  max-width: ${(props) => props.theme.sizes.layout};
  margin: 0 auto;
`;

const Layout = styled(Container)`
  min-height: calc(100vh - ${(props) => props.theme.sizes.header});
  background-color: ${(props) => props.theme.colors.grayBackground};
  display: grid;
  grid-gap: 16px;
  grid-template-areas:
    "basketWrapper basketWrapper basketWrapper"
    "mainWrapper mainWrapper mainWrapper"
    "filterWrapper filterWrapper filterWrapper";
  padding-top: 40px;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-areas:
      "filterWrapper basketWrapper basketWrapper"
      "filterWrapper mainWrapper mainWrapper"
      "filterWrapper mainWrapper mainWrapper";
  }
  @media screen and (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 2.054fr 1fr;
    grid-template-areas: "filterWrapper mainWrapper basketWrapper";
  }
`;

export const MainWrapper = styled.main`
  grid-area: mainWrapper;
`;
export const FilterWrapper = styled.aside`
  grid-area: filterWrapper;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;
export const BasketWrapper = styled.aside`
  grid-area: basketWrapper;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    padding: 8px;
  }
`;
export default Layout;
