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
        <Form name="contact" method="post" autoComplete="on">
          <input type="hidden" name="form-name" value="contact" />
          <label for="firstName">Name</label>
          <input
            id="firstName"
            type="text"
            name="name"
            required={true}
            autoComplete="name"
          />
          <label for="givenEmail">Email</label>
          <input
            id="givenEmail"
            type="email"
            name="email"
            required={true}
            autoComplete="email"
          />
          <label for="msg">Message</label>
          <textarea id="msg" maxLength={500} name="message" required={true} />
          <button type="submit">Submit</button>
        </Form>
      </Container>
    </>
  );
};
