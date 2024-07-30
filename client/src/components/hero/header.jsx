import {
  Container,
  Title,
  Content,
  BlinkingCaret,
  MyName,
  ViewWork,
} from "./style";

import avatar from "../../assets/images/avatar.png";

export const Header = () => {
  return (
    <Container>
      <Title>
        Hi, I'm
        <MyName> Greg</MyName>
        <BlinkingCaret>_</BlinkingCaret>
      </Title>
      <Content>Full Stack Application Developer</Content>
      <ViewWork>
        <span className="material-symbols-outlined">arrow_downward_alt</span>
      </ViewWork>
    </Container>
  );
};
