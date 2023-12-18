import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const ArrowDown = styled.div`
  animation: ${bounce} 2s infinite;
  position: relative;
  top: 35vh;
  z-index: 1;
`;