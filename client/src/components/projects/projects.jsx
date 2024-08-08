import { SectionTitle } from "../styles";
import { Container, ProjectCard } from "./style";
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
          <h3>Projects</h3>
        </SectionTitle>

        <ProjectCard to="/projects/backflowbuddy">
          <div className="project-title-wrapper">
            <div className="project-title">
              Backflow Device Testing Simulator
            </div>
            <div className="project-synop">
              interactive tool designed to help users prepare for state
              licensing exams.
            </div>
          </div>
        </ProjectCard>
      </Container>
    </ThemeProvider>
  );
};
