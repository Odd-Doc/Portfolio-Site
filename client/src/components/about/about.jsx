import { SectionTitle, ProgressBar } from "../styles";
import { Container, Content } from "./style";

export const About = () => {
  return (
    <Container>
      <SectionTitle>
        <h3>About Me</h3>
        <ProgressBar></ProgressBar>
      </SectionTitle>

      <Content>
        I’m passionate about building things, whether it’s a physical project or
        a creative idea. I thrive on turning concepts into reality and finding
        innovative solutions to challenges. With a hands-on approach and a keen
        eye for detail, I enjoy exploring new techniques and materials to create
        something unique and functional.
      </Content>
    </Container>
  );
};
