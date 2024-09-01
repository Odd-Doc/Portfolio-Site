import { SectionTitle } from "../styles";
import {
  Container,
  Project,
  ProjectCard,
  ProjectSynopsis,
  CallToAction,
} from "./style";
import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "styled-components";

export const Projects = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  const theme = {
    inView: inView,
  };
  return (
    <ThemeProvider theme={theme}>
      <Container id="projects">
        <SectionTitle>
          <h3>Recent Projects</h3>
        </SectionTitle>
        <Project>
          <ProjectCard ref={ref} id="backflow-buddy">
            <ProjectSynopsis>
              <div className="project-title">
                Backflow Device Testing Simulator -
              </div>
              <div className="project-synop">
                Interactive tool designed to help users prepare for state
                licensing exams.
              </div>
            </ProjectSynopsis>
          </ProjectCard>
          <CallToAction to="/projects/backflowbuddy">Learn More</CallToAction>
        </Project>
        <hr />
        <Project>
          <ProjectCard id="franks-relocation">
            <ProjectSynopsis>
              <div className="project-title">Franks Relocation -</div>
              <div className="project-synop">Local moving company website.</div>
            </ProjectSynopsis>
          </ProjectCard>
          <CallToAction to="/projects/franksrelocation">
            Learn More
          </CallToAction>
        </Project>
      </Container>
    </ThemeProvider>
  );
};
