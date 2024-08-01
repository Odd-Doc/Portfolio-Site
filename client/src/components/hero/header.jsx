import { Link, animateScroll as scroll } from "react-scroll";
import {
  Container,
  Title,
  Content,
  BlinkingCaret,
  MyName,
  ViewWork,
} from "./style";

import avatar from "../../assets/images/avatar.png";

export const Header = () => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};
