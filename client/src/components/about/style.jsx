import styled, { keyframes, css } from "styled-components";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  SectionTitle,
  ProjectImageCard,
} from "../styles";
import avatar from "../../assets/images/avatar.png";

const slideInLeft = keyframes`
 from {
    transform: translateX(100%)
    
  }
  to{
    transform: translateX(0%)
    
  }
`;
export const Container = styled(StyledComponentDiv)`
  background-color: ${(props) => props.theme.colors.oxfordblue};
  color: ${(props) => props.theme.colors.platinum};
`;
export const Content = styled(StyledComponentDiv)`
  text-align: center;
  padding-left: 4rem;
  padding-right: 4rem;
  color: ${color.platinum};
`;
export const Title = styled(SectionTitle)`
  color: ${color.platinum};
`;
export const AvatarContainer = styled.div`
  padding-bottom: 5rem;
`;
export const Avatar = styled.div`
  background-image: url(${avatar});
  display: flex;

  border: 4px solid ${(props) => props.theme.colors.platinum};
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 200px;

  animation: ${(props) =>
    props.theme.inView
      ? css`
          ${slideInLeft} 1s ease-in;
        `
      : ""};
  animation-fill-mode: both;

  //scrolling animation
  /* @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      animation: ${slideInLeft};
      animation-timeline: view(block);
      animation-range: cover 0% entry 200%;
      view-timeline-inset: 50%;
    }
  } */
`;
