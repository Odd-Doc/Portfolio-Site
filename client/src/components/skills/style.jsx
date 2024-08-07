import styled from "styled-components";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  StyledCard,
  SectionTitle,
  media,
} from "../styles";

export const Container = styled(StyledComponentDiv)`
  margin: 0;
  padding: 1rem;
  background-color: ${color.platinum};
`;

export const Content = styled(StyledComponentDiv)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  i {
    font-size: 5em;
  }
`;
export const ProjectCard = styled(StyledCard)``;
export const Title = styled(SectionTitle)`
  color: ${color.oxfordblue};
  padding: 2rem;
  ${media.sm`
  padding-bottom: 0.5rem;
  
  `};
`;
