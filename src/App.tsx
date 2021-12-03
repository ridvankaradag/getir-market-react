import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Layout, {
  BasketWrapper,
  FilterWrapper,
  MainWrapper,
} from "./components/Layout";
import BasketContainer from "./containers/Basket";
import FilterContainer from "./containers/Filter";
import HeaderContainer from "./containers/Header";
import ProductList from "./containers/ProductList";
import theme, { GlobalStyle } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderContainer />
      <Layout>
        <FilterWrapper>
          <FilterContainer></FilterContainer>
        </FilterWrapper>
        <MainWrapper>
          <ProductList />
        </MainWrapper>
        <BasketWrapper>
          <BasketContainer />
        </BasketWrapper>
      </Layout>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
