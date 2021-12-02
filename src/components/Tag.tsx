import styled from "styled-components";
import Button from "./Button";

interface TagProps {
  active?: boolean;
  children: React.ReactNode;
}

const Tag = styled(Button)<TagProps>`
  width: 60px;
  height: 30px;
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.primary
      : props.theme.colors.infoLightest};
  color: ${(props) =>
    props.active
      ? props.theme.colors.infoLightest
      : props.theme.colors.primary};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.infoLightest};
  }
`;

export default Tag;
