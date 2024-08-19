import { About } from "../../components/about/about";
import { Navbar } from "../../components/navbar/navbar";
import { Projects } from "../../components/projects/projects";
import { Header } from "../../components/hero/header";
import { Skills } from "../../components/skills/skills";
import { ContactMe } from "../../components/contactMe/contactMe";
import { Container } from "./style";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { SideBar } from "../../components/sideBar/sideBar";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <SideBar />
      <Header />
      <Projects />
      <About />
      <Skills />
      <ContactMe />
      <Footer />
      <Outlet />
    </Container>
  );
};
export default Home;
