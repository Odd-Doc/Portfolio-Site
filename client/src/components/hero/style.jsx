import { styled, keyframes } from "styled-components";

import { media, colorScheme_main as color } from "../styles";

import { ContactMeLink as CTA } from "../contactMe/style";

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
  color: ${(props) => props.theme.colors.platinum};
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.5em;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.oxfordblue};
  ${media.sm`
    font-size: 1em;
  `}
  & .cta {
    background-color: ${(props) => props.theme.colors.orangeweb};
    color: ${(props) => props.theme.colors.oxfordblue};
    padding: 1rem;
    i {
      color: ${(props) => props.theme.colors.oxfordblue};
    }
  }
`;

export const Title = styled.h1`
  animation: ${slideInRight} 1s, ${fadeIn} 1s linear;
  padding-bottom: 1rem;
  margin: 0;
  display: flex;
`;
export const MyName = styled.div`
  letter-spacing: 0.1em;
  //target specific character(s) and have white space compiled from jsx
  white-space: pre-wrap;
  color: ${(props) => props.theme.colors.orangeweb};
`;
export const BlinkingCaret = styled.div`
  animation: ${blinkingCaret} 0.75s ease-in-out infinite;
`;
export const Content = styled.h3`
  animation: ${slideInLeft} 1s, ${fadeIn} 1s linear;
  padding: 0;
  margin: 0;
  /* display: flex; */
  text-align: center;
  /* flex-direction: column; */
  /* align-items: center; */
  p {
    font-size: 0.6em;
  }
`;
export const ViewWork = styled.div`
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
export const ContactButton = styled(CTA)`
  background-color: ${(props) => props.theme.colors.platinum};
`;
