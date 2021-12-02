import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    black: "#191919",
    grayBackground: "#FAFAFA",
    primary: "#1EA4CE",
    primaryDark: "#147594",
    grayLightest: "#F4F4F4",
    grayLight: "#A8A8A8",
    grayMedium: "#697488",
    grayDark: "#525252",
    grayDarkest: "#6F6F6F",
    white: "#FFFFFF",
    lightBackground: "#FEFEFE",
    infoLight: "#F3F0FE",
    infoLightest: "F2F0FD",
    info: "#E0E0E0",
    infoDark: "#DFDEE2",
    placeholder: "#C4C4C4",
  },
  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
};

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
`;

export default theme;
