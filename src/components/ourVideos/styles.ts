import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slideInFromLeft = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &.on-screen {
    animation: ${fadeIn} 1s ease-in-out;
  }
`;

export const AnimatedItem = styled.div`
  &.on-screen {
    animation: ${slideInFromLeft} 1s ease-in-out;
  }
`;
