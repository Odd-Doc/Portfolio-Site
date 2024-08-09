import styled, { keyframes, css } from "styled-components";
import bb from "../../assets/images/bb-mainmenu.png";
import { media } from "../styles";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  ProjectImageCard,
  SectionTitle,
} from "../styles";

const slideInRight = keyframes`
 from {
    transform: translateX(-100%)
  }
  to{
    transform: translateX(0%)

  }
 
`;
const slideDownCard = keyframes`
from {
		opacity: 0;
		clip-path: inset(0% 0% 100% 0%);
	}
	to {
		opacity: 1;
		clip-path: inset(0% 0% 0% 0%);
	}
 
`;
const slideUpCard = keyframes`
from {
		opacity: 1;
		clip-path: inset(0% 0% 0% 0%);
	}
	to {
		opacity: 0;
		clip-path: inset(0% 0% 100% 0%);
	}
 
`;
export const Title = styled(SectionTitle)``;
export const ProjectCard = styled(ProjectImageCard)`
  background-image: url(${bb});
  animation: ${(props) =>
    props.theme.inView
      ? css`
          ${slideInRight} 1s ease-in;
        `
      : ""};
  animation-fill-mode: both;

  //scroll animation
  /* @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      animation: ${slideInRight};
      animation-timeline: view(block);
      animation-range: cover 0% entry 100%;
      view-timeline-inset: 45%;
    }
  } */
`;

export const Container = styled(StyledComponentDiv)`
  background-color: ${color.platinum};
`;
export const ProjectSynopsis = styled.div`
  position: relative;
  background-color: ${color.oxfordblueTransparent};
  opacity: 0;
  padding: 2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: ${color.platinum};

  ${ProjectCard}:hover & {
    display: block;
    animation: ${slideDownCard} 1s;
    animation-fill-mode: forwards;
  }
  animation: ${slideUpCard} 1s;
  ${media.sm`
      font-size: 0.9em;
      padding:1rem;
      `}
`;
export const ImageContainer = styled.div``;
