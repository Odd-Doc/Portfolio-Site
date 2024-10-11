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
          <h3>Current Projects</h3>
        </SectionTitle>
        <Project>
          <ProjectCard ref={ref} id="device-sentinel">
            {/* <video
              autoPlay
              loop
              muted
              width="500"
              height="300"
              src="https://media1.giphy.com/media/2rqEdFfkMzXmo/giphy.mp4?cid=790b76118e85130b6027e42ff5aca28cf62871c4e09f8306&rid=giphy.mp4&ct=g"
            >
              A man moving his hands away from his forehead sideways, in a
              mind-explosion gesture. An overlaid animation enforces the
              explosion character.
            </video> */}
            <ProjectSynopsis>
              <div className="project-title">
                Compliance Engine - Cross Connection Control
              </div>
              <div className="project-synop">
                A cross-connection compliance application that streamlines the
                management and tracking of backflow prevention assemblies.
              </div>
            </ProjectSynopsis>
          </ProjectCard>
          <CallToAction to="/projects/devicesentinel">Learn More</CallToAction>
        </Project>
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
