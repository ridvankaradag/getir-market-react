import styled from "styled-components";
import { PrimaryButton } from "./Button";

export const ProductAddButton = styled(PrimaryButton)`
  height: 22px;
  margin-top: auto;
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  line-height: ${(props) => props.theme.lineHeights.medium};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.white};
`;
