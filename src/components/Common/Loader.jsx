// Backdrop.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const l49 = keyframes`
  58%,
  100% {transform: rotate(calc(var(--s,1)*1turn))}
`;

const LoaderWrapper = styled.div`
  height: 10px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background:
    var(--_g) left,
    var(--_g) right;
  background-size: 25% 100%;
  display: grid;
  
  &:before,
  &:after {
    content: "";
    height: inherit;
    aspect-ratio: 1;
    grid-area: 1/1;
    margin: auto;
    border-radius: 50%;
    transform-origin: -100% 50%;
    background: #000;
    animation: ${l49} 1s infinite linear;
  }
  
  &:after {
    transform-origin: 200% 50%;
    --s: -1;
    animation-delay: -.5s;
  }
`;

const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300; /* Ensure it appears above other elements */
`;

const Loader = ({ open }) => {
  if (!open) return null;
  return (
    <BackdropWrapper>
      <LoaderWrapper />
    </BackdropWrapper>
  );
};

export default Loader;
