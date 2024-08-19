import { Link } from "react-dom";
import { Container, InViewTrigger, TriggerWrapper } from "./style";
import { IconGroup } from "../footer/style";
import dcIcon from "../../assets/images/discordIcon.png";
import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "styled-components";

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
                <i className="devicon-github-original icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/greg-phillips-91b79020b/">
                <i className="devicon-linkedin-plain colored"></i>
              </a>
              <a href="https://discordapp.com/users/odd.doc">
                <img src={dcIcon} className="icon" />
              </a>
              <i className="fa-solid fa-envelope"></i>
            </IconGroup>
          </Container>{" "}
          <InViewTrigger className="in" ref={ref} />
        </TriggerWrapper>
      </ThemeProvider>
    </>
  );
};
