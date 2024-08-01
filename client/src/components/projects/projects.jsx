import { Link, Outlet } from "react-router-dom";
import { SectionTitle, ProgressBar } from "../styles";
import { BackflowBuddyProject, Container, Content, ProjectCard } from "./style";
import bb from "../../assets/images/bb-mainmenu.png";
export const Projects = () => {
  return (
    <>
      <Container id="projects">
        <SectionTitle>
          <h3>Projects</h3>
          <ProgressBar></ProgressBar>
        </SectionTitle>
        <Link to="/projects/backflowbuddy">
          <ProjectCard>
            <BackflowBuddyProject src={bb} />
          </ProjectCard>
        </Link>
      </Container>
    </>
  );
};
