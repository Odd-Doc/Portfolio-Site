import { colorScheme_main, SectionTitle } from "../styles";
import { Container, Content, IconGroup, NavLink, IdeaImage } from "./style";
import dcIcon from "../../assets/images/discord-mark-white.png";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

export const Footer = () => {
  const scrollTo = (el) => {
    const yOffset = -20; // Adjust the offset to your liking
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };
  return (
    <>
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
            <a href="https://github.com/Odd-Doc">
              <i className="devicon-github-original"></i>
            </a>
            <a href="https://www.linkedin.com/in/greg-phillips-91b79020b/">
              <i className="devicon-linkedin-plain"></i>
            </a>
            <a href="https://discordapp.com/users/odd.doc">
              <img src={dcIcon} />
            </a>
          </IconGroup>
        </Content>
      </Container>
    </>
  );
};
