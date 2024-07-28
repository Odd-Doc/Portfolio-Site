import styled from "styled-components";
import { StyledComponentDiv, media } from "../styles";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  /* grid-area: nav; */
`;

export const Bar = styled(StyledComponentDiv)`
  display: flex;
  padding: 1em;
  gap: 2em;
  flex-wrap: wrap;
  background-color: #000000c9;
  justify-content: flex-end;
  ${media.sm`
  justify-content: space-between;
  
  `}
`;

const NavbarItem = styled(StyledComponentDiv)`
  color: white;
  font-size: 1rem;
`;

export const Logo = styled(NavbarItem)``;
export const About = styled(NavbarItem)``;
export const Projects = styled(NavbarItem)``;
export const Skills = styled(NavbarItem)``;
