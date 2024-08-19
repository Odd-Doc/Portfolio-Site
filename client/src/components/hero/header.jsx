import { Link, animateScroll as scroll } from "react-scroll";
import {
  Container,
  Title,
  Content,
  BlinkingCaret,
  MyName,
  ViewWork,
  ContactButton,
} from "./style";
import { ContactMeLink } from "../contactMe/style";

export const Header = () => {
  return (
    <>
      <Container id="home">
        <Title>
          Hi, I'm
          <MyName> Greg</MyName>
          <BlinkingCaret>_</BlinkingCaret>
        </Title>
        <Content>
          Full Stack Application Developer
          <p> A Proud father and relentless tinkerer</p>
        </Content>
        <ViewWork>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="material-symbols-outlined"
            href=""
          >
            arrow_downward_alt
          </Link>
        </ViewWork>
        <ContactMeLink className="cta" to="/get-in-touch">
          <i className="fa-solid fa-envelope"></i>
          Let's Talk!
        </ContactMeLink>
      </Container>
    </>
  );
};
