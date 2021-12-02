import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";
import theme, { GlobalStyle } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <h1>Hello</h1>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
