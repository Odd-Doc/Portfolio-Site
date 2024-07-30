import styled from "styled-components";
import bb from "../../assets/images/bb.png";

import {
  StyledComponentDiv,
  colorScheme_main as color,
  StyledCard,
} from "../styles";

export const Container = styled(StyledComponentDiv)`
  margin: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled(StyledComponentDiv)``;
export const ProjectCard = styled(StyledCard)`
  background-repeat: no-repeat;
  background-image: url(${bb});
  width: 80%;
  height: 0;
  padding-top: 50%;
  background-size: cover;
`;
