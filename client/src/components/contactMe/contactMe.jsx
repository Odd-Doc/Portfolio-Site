import { ContactMeLink, Container, IdeaImage } from "./style";
import { Link } from "react-router-dom";

export const ContactButton = () => {
  return (
    <ContactMeLink to="/get-in-touch">
      <i className="fa-solid fa-envelope"></i>
      Let's Talk!
    </ContactMeLink>
  );
};

export const ContactMe = () => {
  return (
    <Container id="contact">
      <hr></hr>
      <h3 className="have-an-idea">Have an idea?</h3>
      <ContactButton></ContactButton>
    </Container>
  );
};
