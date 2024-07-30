import { SectionTitle, ProgressBar } from "../styles";
import { Container, Content } from "./style";

export const Skills = () => {
  return (
    <Container>
      <SectionTitle>
        <h3>Multi Discipline</h3>
        <ProgressBar></ProgressBar>
      </SectionTitle>
      <Content>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-html5-plain colored"></i>
        <i class="devicon-css3-plain colored"></i>
        <i class="devicon-mongodb-plain colored"></i>
        <i class="devicon-mongoose-original colored"></i>
        <i class="devicon-express-original"></i>
        <i class="devicon-react-original colored"></i>
        <i class="devicon-nodejs-plain colored"></i>
        <i class="devicon-unity-plain"></i>
        <i class="devicon-blender-original colored"></i>
      </Content>
    </Container>
  );
};
