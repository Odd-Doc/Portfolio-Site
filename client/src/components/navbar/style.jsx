import styled from "styled-components";
import { StyledComponentDiv } from "../styles";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  /* grid-area: nav; */
`;

export const Bar = styled(StyledComponentDiv)`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  background-color: tomato;
  justify-content: flex-end;
`;

const NavbarItem = styled(StyledComponentDiv)`
  color: white;
  font-size: 2rem;
`;

export const Logo = styled(NavbarItem)``;
export const About = styled(NavbarItem)``;
export const Projects = styled(NavbarItem)``;
export const Skills = styled(NavbarItem)``;
