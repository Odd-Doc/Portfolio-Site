import styled from "styled-components";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  StyledCard,
} from "../styles";

export const Container = styled(StyledComponentDiv)`
  margin: 0;
  padding: 1rem;
`;

export const Content = styled(StyledComponentDiv)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  i {
    font-size: 2em;
  }
`;
export const ProjectCard = styled(StyledCard)``;
