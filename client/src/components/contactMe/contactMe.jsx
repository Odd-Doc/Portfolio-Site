import { ContactMeButton, Container } from "./style";
import { Link } from "react-router-dom";

export const ContactMe = () => {
  return (
    <Container id="contact">
      <hr></hr>
      <h3 className="have-an-idea">Have an idea?</h3>
      <Link to="/get-in-touch">
        <ContactMeButton>Let's Make Something!</ContactMeButton>
      </Link>
    </Container>
  );
};
