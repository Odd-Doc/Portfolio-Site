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
export const TriggerWrapper = styled.div`
  position: absolute;
  && .in {
    height: 125vh;
    transform: translateY(96em);
  }
  ${media.sm`
   && .in {
    height: 185vh;
    transform: translateY(63em);
  } 
  `}
`;
export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: ${(props) => (props.theme.inView ? "0%" : "-100%")};
  transition: ease-in-out 0.5s;
  align-items: center;
  z-index: 11;
  background-color: ${(props) => props.theme.colors.orangeweb};
  padding: 1rem;
  border-radius: 0px 8px 8px 0px;
  ${media.sm`
    font-size: 1em;
    padding: 0.5rem;
  `};
  .icon-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.25em;
  }
  i {
    color: ${(props) => props.theme.colors.oxfordblue};
  }
`;
export const InViewTrigger = styled.div`
  /* position: absolute;
  top: 70%;
  height: 10px; */
`;
