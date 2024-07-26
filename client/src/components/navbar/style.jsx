import styled from "styled-components";
import { StyledComponentDiv } from "../styles";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  grid-area: nav;
`;

export const Bar = styled(StyledComponentDiv)`
  display: grid;
  grid-template-columns: 6fr 1fr 1fr 1fr;
  grid-template-areas: "logo projects skills about";
  background-color: tomato;
`;

const NavbarItem = styled(StyledComponentDiv)`
  color: white;
  font-size: 2rem;
`;

export const Logo = styled(NavbarItem)`
  grid-area: logo;
`;
export const About = styled(NavbarItem)`
  grid-area: about;
`;
export const Projects = styled(NavbarItem)`
  grid-area: projects;
`;
export const Skills = styled(NavbarItem)`
  grid-area: skills;
`;
