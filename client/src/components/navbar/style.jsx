import styled from "styled-components";
import { StyledComponentDiv } from "../styles";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  grid-area: nav;
  display: flex;
`;

export const Bar = styled(StyledComponentDiv)`
  display: grid;
  grid-template-columns: 1fr 0.25fr 0.25fr 0.25fr;
  grid-template-areas: "logo projects skills about";
  width: 100vw;
  align-items: center;
  justify-items: flex-end;
  background-color: tomato;
`;

const NavbarItem = styled(StyledComponentDiv)`
  padding: 1rem;
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
