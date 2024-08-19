import { Link } from "react-dom";
import { Container, InViewTrigger, TriggerWrapper } from "./style";
import { IconGroup } from "../footer/style";
import dcIcon from "../../assets/images/discord-mark-blue.png";
import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  const theme = {
    inView: inView,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <TriggerWrapper>
          <Container id="side-bar">
            <IconGroup className="icon-group">
              <a href="https://github.com/Odd-Doc">
                <i className="devicon-github-original colored"></i>
              </a>
              <a href="https://www.linkedin.com/in/greg-phillips-91b79020b/">
                <i className="devicon-linkedin-plain colored"></i>
              </a>
              <a href="https://discordapp.com/users/odd.doc">
                <img src={dcIcon} className="icon" />
              </a>
              <NavLink to="/get-in-touch">
                <i className="fa-solid fa-envelope"></i>
              </NavLink>
            </IconGroup>
          </Container>
          <InViewTrigger className="in" ref={ref} />
        </TriggerWrapper>
      </ThemeProvider>
    </>
  );
};
