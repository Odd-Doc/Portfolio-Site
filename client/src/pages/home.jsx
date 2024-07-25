import Navbar from "../components/navbar/navbar";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <h1 className="home-title">Welcome to Doc's Portfolio!</h1>
      <Navbar />
    </Container>
  );
};
export default Home;
