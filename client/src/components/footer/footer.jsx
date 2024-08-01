import { SectionTitle } from "../styles";
import { Container, Content, IconGroup } from "./style";
import dcIcon from "../../assets/images/discordIcon.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Container>
      <Content>
        <Link className="footer-nav" to="/">
          <div>Home</div>
        </Link>
        <div>Projects</div>
        <div>Contact</div>
        <div>About</div>
        <IconGroup>
          <i class="devicon-github-original colored"></i>

          <i class="devicon-linkedin-plain"></i>
          <img src={dcIcon} />
        </IconGroup>
      </Content>
    </Container>
  );
};
