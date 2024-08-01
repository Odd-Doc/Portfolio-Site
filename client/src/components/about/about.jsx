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
        innovative solutions to challenges.
      </Content>
    </Container>
  );
};
