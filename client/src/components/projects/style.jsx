import styled from "styled-components";
import bb from "../../assets/images/bb-mainmenu.png";

import {
  StyledComponentDiv,
  colorScheme_main as color,
  StyledCard,
  ProjectImageCard,
  SectionTitle,
} from "../styles";

export const Container = styled(StyledComponentDiv)`
  margin: 0;
  justify-content: center;
`;

export const ImageContainer = styled.div``;
export const ProjectCard = styled(ProjectImageCard)`
  background-image: url(${bb});
`;
export const Title = styled(SectionTitle)``;
