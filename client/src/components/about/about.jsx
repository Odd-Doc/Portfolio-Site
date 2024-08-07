import { ProgressBar } from "../styles";
import { Container, Content, Title, Avatar } from "./style";
import avatar from "../../assets/images/avatar.png";
export const About = () => {
  return (
    <Container id="about">
      <Title>
        <h3>About Me</h3>
        <ProgressBar></ProgressBar>
      </Title>
      <Avatar>
        <img src={avatar} />
      </Avatar>

      <Content>
        I’m passionate about building things, whether it’s a physical project or
        a creative idea. I thrive on turning concepts into reality and finding
        innovative solutions to challenges.
      </Content>
    </Container>
  );
};
