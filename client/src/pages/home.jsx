import { About } from "../components/about/about";
import { Navbar } from "../components/navbar/navbar";
import { Projects } from "../components/projects/projects";
import { Skills } from "../components/skills/skills";
import { ContactMe } from "../components/contactMe/contactMe";
import { Container, HomeTitle } from "./style";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <HomeTitle>Welcome!</HomeTitle>
      <Projects />
      <Skills />
      <About />
      <ContactMe />
    </Container>
  );
};
export default Home;
