import styled from "styled-components";
import avatar from "../../assets/images/avatar.png";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  SectionTitle,
} from "../styles";

export const Container = styled(StyledComponentDiv)`
  margin: 0;
  padding: 1rem;

  background-color: ${color.blackolive};
`;

export const Title = styled(SectionTitle)`
  padding: 0;
  margin: 0;
`;
