import styled from "styled-components";

export const SearchBox = styled.input`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 6px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.info};
  outline: none;
  padding: 12px 16px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.large};
  letter-spacing: ${(props) => props.theme.letterSpacings.small};
  &::placeholder {
    color: ${(props) => props.theme.colors.grayLight};
  }
`;
