import { Link } from "react-dom";
import { Container } from "./style";
import { IconGroup } from "../footer/style";
import dcIcon from "../../assets/images/discord-mark-white.png";

export const SideBar = () => {
  return (
    <>
      <Container id="side-bar"></Container>
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
    </>
  );
};
