import { SectionTitle } from "../styles";
import { Container, Content, IconGroup, NavLink } from "./style";
import dcIcon from "../../assets/images/discord-mark-white.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollTo = (el) => {
    const yOffset = -200; // Adjust the offset to your liking
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <Container>
      <Content>
        <NavLink to="#home" scroll={scrollTo}>
          <div>Home</div>
        </NavLink>
        <NavLink to="#projects" scroll={scrollTo}>
          Projects
        </NavLink>
        <NavLink to="#about" scroll={scrollTo}>
          About
        </NavLink>
        <NavLink to="#contact" scroll={scrollTo}>
          Contact
        </NavLink>

        <IconGroup>
          <i className="devicon-github-original"></i>
          <i className="devicon-linkedin-plain"></i>
          <img src={dcIcon} />
        </IconGroup>
      </Content>
    </Container>
  );
};
