import { SectionTitle, ProgressBar } from "../styles";
import { Container, Content, Title } from "./style";

export const Skills = () => {
  return (
    <Container>
      <Title>
        <h3>My Toolbelt</h3>
        <ProgressBar></ProgressBar>
      </Title>
      <Content>
        <i className="devicon-mongodb-plain colored"></i>
        <i className="devicon-express-original colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-mongoose-original colored"></i>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-html5-plain colored"></i>
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-unity-plain colored"></i>
        <i className="devicon-blender-original colored"></i>
        <i className="devicon-csharp-plain colored"></i>
      </Content>
    </Container>
  );
};
