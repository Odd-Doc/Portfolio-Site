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

export const Container = styled.div`
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  align-items: center;
  flex-direction: column;
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
export const Content = styled.h4`
  animation: ${slideInLeft} 1s, ${fadeIn} 1s linear;
  padding: 0;
  margin: 0;
`;
export const ViewWork = styled(StyledCard)`
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.8em;
  font-weight: lighter;
  display: flex;
  align-items: center;
  span {
    align-self: flex-end;
  }
`;
// export const Avatar = styled.div`
//   padding-left: 0;
//   padding-right: 0;
//   ${media.sm`
//     padding-left: 0;
//   padding-right: 0;

//   `}
//   div {
//     border-style: solid;
//     border-color: white;
//     border-width: 2px;
//     display: flex;
//     border-radius: 50%;
//   }
//   img {
//     /* without this, the avatar img overflows
//     when the screen width is less than the image */

//     max-width: 100%;
//   }
// `;
