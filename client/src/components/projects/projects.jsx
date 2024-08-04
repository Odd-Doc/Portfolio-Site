import { Link, Outlet } from "react-router-dom";
import { ProgressBar, ProjectImageCard, SectionTitle } from "../styles";
import { Container, ProjectCard } from "./style";
import bb from "../../assets/images/bb-mainmenu.png";
export const Projects = () => {
  return (
    <>
      <Container id="projects">
        <SectionTitle>
          <h3>Projects</h3>
        </SectionTitle>
        {/* <ProgressBar></ProgressBar> */}
        <ProjectCard to="/projects/backflowbuddy">
          <div className="project-title">Backflow Device Testing Simulator</div>
          <div className="project-synop">
            interactive tool designed to help users prepare for state licensing
            exams.
          </div>
        </ProjectCard>
      </Container>
    </>
  );
};
