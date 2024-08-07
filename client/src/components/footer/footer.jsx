import { SectionTitle } from "../styles";
import { Container, Content, IconGroup, NavLink } from "./style";
import dcIcon from "../../assets/images/discord-mark-white.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <NavLink to="#home">
          <div>Home</div>
        </NavLink>
        <NavLink to="#projects">Projects</NavLink>
        <NavLink to="#contact">Contact</NavLink>
        <NavLink to="#about">About</NavLink>
        <IconGroup>
          <i className="devicon-github-original"></i>
          <i className="devicon-linkedin-plain"></i>
          <img src={dcIcon} />
        </IconGroup>
      </Content>
    </Container>
  );
};
