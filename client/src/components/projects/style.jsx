import styled from "styled-components";
import bb from "../../assets/images/bb-mainmenu.png";
import { media } from "../styles";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  StyledCard,
  ProjectImageCard,
  SectionTitle,
} from "../styles";
export const Title = styled(SectionTitle)``;
export const ProjectCard = styled(ProjectImageCard)`
  background-image: url(${bb});
  margin-bottom: 2rem;
`;
export const Container = styled(StyledComponentDiv)`
  background-color: ${color.platinum};
  ${ProjectCard} {
    transform: ${(props) =>
      props.theme.view ? "translateX(0%)" : "translateX(200%)"};
    transition: 1s;
    .project-title-wrapper {
      position: fixed;
      transform: ${(props) =>
        props.theme.view ? "translateX(-15%)" : "translateX(-500%)"};
      border-radius: 5px;
      transition: 2s;
      padding: 2rem;
      bottom: -10px;
      background-color: ${color.oxfordblueTransparent};
      ${media.sm`
      font-size: 0.9em;
      padding:1rem;
  `}
    }
  }
`;

export const ImageContainer = styled.div``;
