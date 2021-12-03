import styled from "styled-components";
import { Container } from "../../components/Layout";
import logo from "../../assets/logo.svg";
import BasketButton from "./BasketButton";

const Header = styled.header`
  height: ${(props) => props.theme.sizes.header};
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.img`
  margin: 0 auto;
`;

const HeaderContainer = () => (
  <Header>
    <HeaderWrapper>
      <LogoWrapper>
        <Logo src={logo} alt="Logo" />
      </LogoWrapper>
      <BasketButton />
    </HeaderWrapper>
  </Header>
);

export default HeaderContainer;
