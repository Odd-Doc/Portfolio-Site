import styled from "styled-components";
import { StyledComponentDiv, media } from "../styles";

export const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export const Bar = styled(StyledComponentDiv)`
  display: flex;
  background-color: #000000;
  flex-direction: column;
  ${media.sm`
  display: none;
  
  `}
`;

const NavbarItem = styled(StyledComponentDiv)`
  color: white;
`;

export const Logo = styled(NavbarItem)``;
export const About = styled(NavbarItem)``;
export const Projects = styled(NavbarItem)``;
export const Skills = styled(NavbarItem)``;
