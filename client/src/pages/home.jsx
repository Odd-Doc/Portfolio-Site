import { About } from "../components/about/about";
import { Navbar } from "../components/navbar/navbar";
import { Projects } from "../components/projects/projects";
import { Header } from "../components/hero/header";
import { Skills } from "../components/skills/skills";
import { ContactMe } from "../components/contactMe/contactMe";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
    </Container>
  );
};
export default Home;
