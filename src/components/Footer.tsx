import styled, { css } from "styled-components";

const shared = () => css`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.large};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.primary};
`;

const FooterContainer = styled.footer`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const FooterItem = styled.span`
  ${shared};
  &::after {
    content: ".";
    transform: translateY(-4px);
  }
`;
const FooterLinkItem = styled.a`
  ${shared};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterLinkItem href="#">©2019 Market</FooterLinkItem>
    <FooterItem />
    <FooterLinkItem href="#">Privacy Policy</FooterLinkItem>
  </FooterContainer>
);

export default Footer;
