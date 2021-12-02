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
  grid-template-columns: 1fr 2.054fr 1fr;
  grid-template-areas: "filterWrapper mainWrapper basketWrapper";
  padding-top: 40px;
`;

export const MainWrapper = styled.main`
  grid-area: mainWrapper;
`;
export const FilterWrapper = styled.aside`
  grid-area: filterWrapper;
`;
export const BasketWrapper = styled.aside`
  grid-area: basketWrapper;
`;
export default Layout;
