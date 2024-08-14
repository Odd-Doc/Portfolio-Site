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
        <Form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <label>Name</label>
          <input type="text" name="name" required={true} />
          <label>Email</label>
          <input type="email" name="email" required={true} />
          <label>Message</label>
          <textarea maxLength={500} name="message" required={true} />
          <button type="submit">Submit</button>
        </Form>
      </Container>
    </>
  );
};
