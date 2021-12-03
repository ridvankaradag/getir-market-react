import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.xlarge};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.xlarge};
  letter-spacing: ${(props) => props.theme.letterSpacings.large};
  color: ${(props) => props.theme.colors.grayDarkest};
  @media screen and (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    text-align: center;
  }
`;
