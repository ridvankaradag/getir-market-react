import { ThemeProvider } from "styled-components";
import Layout, {
  BasketWrapper,
  FilterWrapper,
  MainWrapper,
} from "./components/Layout";
import HeaderContainer from "./containers/Header";
import ProductList from "./containers/ProductList";
import theme, { GlobalStyle } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderContainer />
      <Layout>
        <FilterWrapper />
        <MainWrapper>
          <ProductList />
        </MainWrapper>
        <BasketWrapper />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
