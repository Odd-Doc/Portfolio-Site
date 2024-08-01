import { SectionTitle, ProgressBar } from "../styles";
import { Container, Content } from "./style";

export const Skills = () => {
  return (
    <Container>
      <SectionTitle>
        <h3>Multi Disciplined</h3>
        <ProgressBar></ProgressBar>
      </SectionTitle>
      <Content>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-html5-plain colored"></i>
        <i className="devicon-css3-plain colored"></i>
        <i className="devicon-mongodb-plain colored"></i>
        <i className="devicon-mongoose-original colored"></i>
        <i className="devicon-express-original"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-unity-plain"></i>
        <i className="devicon-blender-original colored"></i>
        <i className="devicon-csharp-plain-wordmark"></i>
      </Content>
    </Container>
  );
};
