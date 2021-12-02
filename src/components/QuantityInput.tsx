import styled from "styled-components";
import { ReactComponent as MinusIcon } from "../assets/minusIcon.svg";
import { ReactComponent as PlusIcon } from "../assets/plusIcon.svg";
import Button from "./Button";

const InputWrapper = styled.div`
  display: flex;
  gap: 11px;
`;

const Quantity = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuantityButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center; ;
`;

const QuantityInput = () => (
  <InputWrapper>
    <QuantityButton>
      <MinusIcon />
    </QuantityButton>
    <Quantity>1</Quantity>
    <QuantityButton>
      <PlusIcon />
    </QuantityButton>
  </InputWrapper>
);

export default QuantityInput;
