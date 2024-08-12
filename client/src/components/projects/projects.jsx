import { Link } from "react-router-dom";
import { SectionTitle } from "../styles";
import { Container, ProjectCard, ProjectSynopsis, LearnMore } from "./style";
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

        <LearnMore>
          <Link>Learn More</Link>
        </LearnMore>
      </Container>
    </ThemeProvider>
  );
};
