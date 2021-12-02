import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { ReactComponent as CheckedIcon } from "../assets/checkedIcon.svg";
import { ChooseInput, LabelText, CheckMark, ContainerLabel } from "./Choose";

const CheckboxCheckMark = styled(CheckMark)`
  box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
`;

const CheckboxContainerLabel = styled(ContainerLabel)`
  & ${ChooseInput}:checked ~ ${CheckMark} {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
  &:hover ${ChooseInput}:not(:checked) ~ ${CheckMark} {
    border: 2px solid;
  }
`;

interface CheckboxInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const CheckboxItem = ({ label, ...other }: CheckboxInputProps) => (
  <CheckboxContainerLabel>
    <LabelText>{label}</LabelText>
    <ChooseInput type="checkbox" {...other} />
    <CheckboxCheckMark>
      <CheckedIcon />
    </CheckboxCheckMark>
  </CheckboxContainerLabel>
);

export default CheckboxItem;
