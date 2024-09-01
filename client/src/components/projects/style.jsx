import styled, { keyframes, css } from "styled-components";
import bb from "../../assets/images/bb-mainmenu.png";
import franksLanding from "../../assets/images/franks-landing.png";

import { media } from "../styles";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  ProjectImageCard,
  SectionTitle,
} from "../styles";
import { Link } from "react-router-dom";

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
const reveal = keyframes`
	from {
		opacity: 0;
    transform: translateY(100%)
		
	}
	to {
		opacity: 1;
    transform: translateY(0%)
		
	}
`;
export const Title = styled(SectionTitle)``;
export const ProjectCard = styled(ProjectImageCard)`
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
  background-color: ${(props) => props.theme.colors.platinum};
  hr {
    height: 2px;
    border: none;
    background-color: ${(props) => props.theme.colors.oxfordblue};
    width: 80%;
    margin-bottom: 5rem;
  }
  #backflow-buddy {
    background-image: url(${bb});
  }
  #franks-relocation {
    background-image: url(${franksLanding});
  }
  ${media.sm`
    
  `}
`;
export const ProjectSynopsis = styled.div`
  position: relative;
  opacity: 0;
  padding: 2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: ${(props) => props.theme.colors.platinum};
  background-color: ${(props) => props.theme.colors.oxfordblueTransparent};

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

export const CallToAction = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.orangeweb};
  color: ${(props) => props.theme.colors.oxfordblue};
  text-align: center;
  animation: ${(props) =>
    props.theme.inView
      ? css`
          ${reveal} 1s ease-in 1s;
        `
      : ""};
  animation-fill-mode: both;
  border-radius: 10px;
  font-size: 1.2em;
`;
export const Project = styled.div`
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  ${CallToAction} {
    align-self: center;
  }
`;

export const ImageContainer = styled.div``;
