import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const GroupTitle = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  letter-spacing: ${(props) => props.theme.letterSpacings.none};
  color: ${(props) => props.theme.colors.grayMedium};
  @media screen and (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    text-align: center;
  }
`;
export const GroupWrapper = styled.div`
  padding: 24px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 274px;
`;

export const ScrolledContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
`;

export const ScrolledGroupWrapper = styled(GroupWrapper)`
  overflow-y: auto;
  margin: 0 24px 24px 0;
  padding: 0 0 0 24px;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.info};
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.infoDark};
  }
`;
