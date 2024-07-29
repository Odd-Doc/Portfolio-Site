import { Container, Bar, Projects, Skills, About } from "./style";
export const Navbar = () => {
  return (
    <Bar>
      <Projects>Projects</Projects>
      <Skills>
        <a>Skills</a>
      </Skills>
      <About>About Me</About>
    </Bar>
  );
};
