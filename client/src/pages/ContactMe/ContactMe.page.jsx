import { useState } from "react";
import { Container, Form, Navbar } from "./style";
import { Logo } from "../../components/navbar/style";

export const ContactMePage = () => {
  return (
    <>
      <Navbar>
        <Logo to="/">GP_</Logo>
      </Navbar>
      <Container>
        <Form name="contact" netlify>
          <input placeholder="name*" type="text" name="name" required={true} />
          <input
            placeholder="email address*"
            type="email"
            name="email"
            required={true}
          />
          <textarea
            maxLength={300}
            placeholder="message (max 300 characters)*"
            name="message"
            required={true}
          />
          <button type="submit">Submit</button>
        </Form>
      </Container>
    </>
  );
};
