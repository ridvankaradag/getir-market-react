import styled from "styled-components";

export const ChooseInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const LabelText = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.small};
  letter-spacing: ${(props) => props.theme.letterSpacings.medium};
  color: ${(props) => props.theme.colors.grayDark};
`;

export const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 2px;

  & > svg {
    display: none;
  }
`;

export const ContainerLabel = styled.label`
  display: flex;
  position: relative;
  padding-left: 34px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover ${ChooseInput} ~ ${CheckMark} {
    border-color: ${(props) => props.theme.colors.primary};
  }
  & ${ChooseInput}:checked ~ ${CheckMark} {
    border-color: ${(props) => props.theme.colors.primary};
  }
  & ${ChooseInput}:checked ~ ${CheckMark} > svg {
    display: block;
  }
`;
