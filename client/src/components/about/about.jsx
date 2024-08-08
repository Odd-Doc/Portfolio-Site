import { useInView } from "react-intersection-observer";
import { ProgressBar } from "../styles";
import { Container, Content, Title, Avatar, AvatarContainer } from "./style";
import avatar from "../../assets/images/avatar.png";
import { ThemeProvider } from "styled-components";

export const About = () => {
  const { ref, inView, entry } = useInView({ triggerOnce: true });

  const theme = {
    inView: inView,
  };
  return (
    <ThemeProvider theme={theme}>
      <Container id="about">
        <Title ref={ref}>
          <h3>About Me</h3>
          {/* <ProgressBar></ProgressBar> */}
        </Title>
        <AvatarContainer>
          <Avatar></Avatar>
        </AvatarContainer>

        <Content>
          I’m passionate about building things, whether it’s a physical project
          or a creative idea. I thrive on turning concepts into reality and
          finding innovative solutions to challenges.
        </Content>
      </Container>
    </ThemeProvider>
  );
};
