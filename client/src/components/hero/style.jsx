import { styled, keyframes } from "styled-components";
import avatar from "../../assets/images/avatar.png";

import { media, colorScheme_main as color, StyledCard } from "../styles";

const fadeIn = keyframes`
 0% {
    opacity: 0%
  }
  100% {
    opacity: 100%;
  }
`;

const slideInRight = keyframes`
 0% {
    transform: translateX(-20%)
  }
  100% {
    transform: translateX(0%)
  }
`;
const slideInLeft = keyframes`
 0% {
    transform: translateX(20%)
  }
  100% {
    transform: translateX(0%)
  }
`;

const blinkingCaret = keyframes`
to {
  color: transparent;
}
from {
  color:white;
}

`;

const moveArrow = keyframes`
 0% {transform: translateY(0px);}
 50% {transform: translateY(8px);}
	100% {transform: translateY(0px);}
`;

export const Container = styled.div`
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.5em;
  align-items: center;
  flex-direction: column;

  ${media.sm`
    font-size: 1em;
  `}
`;

export const Title = styled.h1`
  animation: ${slideInRight} 1s, ${fadeIn} 1s linear;
  padding-bottom: 1rem;
  margin: 0;
  display: flex;
`;
export const MyName = styled.div`
  letter-spacing: 0.1em;
  //target specific character(s) and have space compiled from jsx
  white-space: pre-wrap;
  color: ${color.orangeweb};
`;
export const BlinkingCaret = styled.div`
  animation: ${blinkingCaret} 0.75s ease-in-out infinite;
`;
export const Content = styled.h3`
  animation: ${slideInLeft} 1s, ${fadeIn} 1s linear;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 0.6em;
  }
`;
export const ViewWork = styled(StyledCard)`
  color: white;
  position: absolute;
  bottom: 0;
  padding-bottom: 1rem;
  animation: ${moveArrow} 1s infinite;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
