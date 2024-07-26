import { Container, Bar, Projects, Skills, About } from "./style";
export const Navbar = () => {
  return (
    <Container>
      <Bar>
        <Projects>Projects</Projects>
        <Skills>Skills</Skills>
        <About>About Me</About>
      </Bar>
    </Container>
  );
};
