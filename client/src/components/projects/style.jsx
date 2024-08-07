import styled, { keyframes, css } from "styled-components";
import bb from "../../assets/images/bb-mainmenu.png";
import { media } from "../styles";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  StyledCard,
  ProjectImageCard,
  SectionTitle,
} from "../styles";

const slideInRight = keyframes`
 0% {
    transform: translateX(-100%)
  }
  50%{
    transform: translateX(0%)

  }
  100% {
    transform: translateX(0%)
  }
`;
const slideInLeft = keyframes`
 0% {
    transform: translateX(100%)
  }
  50%{
    transform: translateX(0%)

  }
  100% {
    transform: translateX(0%)
  }
`;
const slideRightStyle = css`
  animation: ${slideInRight} 1s linear;
`;
export const Title = styled(SectionTitle)``;
export const ProjectCard = styled(ProjectImageCard)`
  background-image: url(${bb});
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: scroll()) {
      animation: ${(props) =>
        props.theme.view
          ? css`
              ${slideInRight}
            `
          : ""};
      animation-timeline: scroll();
    }
  }

  /* margin-bottom: 2rem; */
`;

export const Container = styled(StyledComponentDiv)`
  background-color: ${color.platinum};
  ${ProjectCard} {
    .project-title-wrapper {
      background-color: ${color.oxfordblueTransparent};
      ${media.sm`
      font-size: 0.9em;
      padding:1rem;
  `}
    }
  }
`;

export const ImageContainer = styled.div``;
