import { ContactMeLink, Container, IdeaImage } from "./style";
import { Link } from "react-router-dom";

export const ContactMe = () => {
  return (
    <Container id="contact">
      <hr></hr>
      <h3 className="have-an-idea">Have an idea?</h3>

      <ContactMeLink to="/get-in-touch">Let's Make Something!</ContactMeLink>
      {/* <IdeaImage src={ideaImg} /> */}
    </Container>
  );
};
