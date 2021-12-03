import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 1;
  max-height: 60vh;
`;

const SpinWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const Ripple = styled.div`
  position: absolute;
  opacity: 1;
  border-radius: 50px;
  border: 4px solid;
  border-color: ${(props) => props.theme.colors.primary};
  animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  @keyframes ripple {
    to {
      transform: scale(8);
      opacity: 0;
    }
  }
`;

const Loading = () => (
  <LoadingWrapper>
    <SpinWrapper>
      <Ripple />
    </SpinWrapper>
  </LoadingWrapper>
);

export default Loading;
