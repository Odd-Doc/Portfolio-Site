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
        <SectionTitle ref={ref}>
          <h3>Recent Projects</h3>
        </SectionTitle>
        <Project>
          <ProjectCard to="/projects/backflowbuddy">
            <ProjectSynopsis>
              <div className="project-title">
                Backflow Device Testing Simulator
              </div>
              <div className="project-synop">
                interactive tool designed to help users prepare for state
                licensing exams.
              </div>
            </ProjectSynopsis>
          </ProjectCard>

          <CallToAction>Learn More</CallToAction>
        </Project>
      </Container>
    </ThemeProvider>
  );
};
