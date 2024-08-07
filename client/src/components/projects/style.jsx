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
`;

export const ImageContainer = styled.div``;
