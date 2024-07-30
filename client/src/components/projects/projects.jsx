import { SectionTitle, ProgressBar } from "../styles";
import { Container, Content, ProjectCard } from "./style";

export const Projects = () => {
  return (
    <Container>
      <SectionTitle>
        <h3>Projects</h3>
        <ProgressBar></ProgressBar>
      </SectionTitle>
      <ProjectCard />
    </Container>
  );
};
