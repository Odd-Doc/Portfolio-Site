import { About } from "../components/about/about";
import { Navbar } from "../components/navbar/navbar";
import { Projects } from "../components/projects/projects";
import { Skills } from "../components/skills/skills";
import { ContactMe } from "../components/contactMe/contactMe";
import { Container, Header, Avatar } from "./style";
import avatar from "../assets/images/avatar.png";
import bgwelcome2 from "../assets/images/bg-welcome2.png";
import bgwelcome3 from "../assets/images/bg-welcome3.png";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Header>
        <Avatar>
          <div>
            <img src={avatar} />
          </div>
        </Avatar>
        Welcome!
      </Header>
      <Projects />
      <Skills />
      <About />
      <ContactMe />
    </Container>
  );
};
export default Home;
