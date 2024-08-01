import { Link, Outlet } from "react-router-dom";
import { SectionTitle, ProgressBar } from "../styles";
import {
  BackflowBuddyProject,
  Container,
  ImageContainer,
  ProjectCard,
} from "./style";
import bb from "../../assets/images/bb-mainmenu.png";
export const Projects = () => {
  return (
    <>
      <Container id="projects">
        <SectionTitle>
          <h3>Projects</h3>
          <ProgressBar></ProgressBar>
        </SectionTitle>{" "}
        <ImageContainer>
          <Link to="/projects/backflowbuddy">
            <BackflowBuddyProject src={bb} />
          </Link>{" "}
        </ImageContainer>
      </Container>
    </>
  );
};
