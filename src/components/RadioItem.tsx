import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { ReactComponent as CheckedIcon } from "../assets/checkedIcon.svg";
import { ChooseInput, LabelText, CheckMark, ContainerLabel } from "./Choose";

const RadioCheckMark = styled(CheckMark)`
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.infoDark};
  border-radius: 50%;
`;

const RadioContainerLabel = styled(ContainerLabel)``;

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
const RadioItem = ({ label, ...other }: RadioInputProps) => (
  <RadioContainerLabel>
    <LabelText>{label}</LabelText>
    <ChooseInput type="radio" {...other} />
    <RadioCheckMark>
      <CheckedIcon />
    </RadioCheckMark>
  </RadioContainerLabel>
);

export default RadioItem;
