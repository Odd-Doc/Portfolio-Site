import { SectionTitle, ProgressBar } from "../styles";
import { Container, Content, Icon, Title } from "./style";
import { Children } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeProvider } from "styled-components";
export const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const theme = {
    inView: inView,
  };
  Children.forEach();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>
          <h3>My Toolbelt</h3>
        </Title>
        <Content ref={ref}>
          <Icon
            title="MongoDB"
            id="0"
            className="devicon-mongodb-plain colored"
          ></Icon>
          <Icon
            title="ExpressJS"
            id="1"
            className="devicon-express-original colored"
          ></Icon>
          <Icon
            title="ReactJS"
            id="2"
            className="devicon-react-original colored"
          ></Icon>
          <Icon
            title="NodeJS"
            id="3"
            className="devicon-nodejs-plain colored"
          ></Icon>
          <Icon
            title="Mongoose"
            id="4"
            className="devicon-mongoose-original colored"
          ></Icon>
          <Icon
            title="Javascript"
            id="5"
            className="devicon-javascript-plain colored"
          ></Icon>
          <Icon
            title="HTML5"
            id="6"
            className="devicon-html5-plain colored"
          ></Icon>
          <Icon
            title="CSS3"
            id="7"
            className="devicon-css3-plain colored"
          ></Icon>
          <Icon
            title="Unity3D"
            id="8"
            className="devicon-unity-plain colored"
          ></Icon>
          <Icon
            title="Blender"
            id="9"
            className="devicon-blender-original colored"
          ></Icon>
          <Icon
            title="CSharp"
            id="10"
            className="devicon-csharp-plain colored"
          ></Icon>
        </Content>
      </Container>
    </ThemeProvider>
  );
};
