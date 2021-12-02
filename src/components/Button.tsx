import styled from "styled-components";

interface ButtonProps {
  block?: boolean;
}

const Button = styled.button`
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.2s;
`;

export const PrimaryButton = styled(Button)<ButtonProps>`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  width: ${(props) => (props.block ? "100%" : "auto")};
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
