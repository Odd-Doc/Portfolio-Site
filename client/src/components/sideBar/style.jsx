import { styled, keyframes } from "styled-components";
import { media, colorScheme_main as color } from "../styles";

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

export const Container = styled.div`
  /* color: ${(props) => props.theme.colors.platinum}; */
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0%;
  align-items: center;
  flex-direction: column;
  /* background-color: ${(props) => props.theme.colors.platinum}; */
  background-color: aquamarine;

  ${media.sm`
    font-size: 1em;
  `}
`;
