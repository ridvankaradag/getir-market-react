import styled from "styled-components";
import { QuantityType } from "../@types/quantity";
import Button from "./Button";

export const InputWrapper = styled.div<QuantityType>`
  display: flex;
  gap: 11px;
  justify-content: center;
  margin-top: ${(props) => (props.size === "small" ? "auto" : "initial")};
`;

export const Quantity = styled.div<QuantityType>`
  width: ${(props) => (props.size === "small" ? "22px" : "32px")};
  height: ${(props) => (props.size === "small" ? "22px" : "32px")};
  background-color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuantityButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
`;
