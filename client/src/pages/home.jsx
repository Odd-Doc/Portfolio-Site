import { About } from "../components/about/about";
import { Navbar } from "../components/navbar/navbar";
import { Projects } from "../components/projects/projects";
import { Skills } from "../components/skills/skills";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <h1 className="home-title">Welcome to Doc's Portfolio!</h1>
      <Navbar />
      <Skills />
      <About />
    </Container>
  );
};
export default Home;
