import { useState } from "react";
import { Container, Form, Navbar } from "./style";
import { Logo } from "../../components/navbar/style";
import { useNavigate } from "react-router-dom";
export const ContactMePage = () => {
  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contact-form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/contact-follow-up"))
      .catch((error) => alert(error));
  };
  return (
    <>
      <Navbar>
        <Logo to="/">GP_</Logo>
      </Navbar>
      <Container>
        <Form
          id="contact-form"
          name="contact"
          method="post"
          autoComplete="on"
          onSubmit={submitHandler}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="firstName">Name</label>
          <input
            id="firstName"
            type="text"
            name="name"
            required={true}
            autoComplete="name"
          />
          <label htmlFor="givenEmail">Email</label>
          <input
            id="givenEmail"
            type="email"
            name="email"
            required={true}
            autoComplete="email"
          />
          <label htmlFor="msg">Message</label>
          <textarea id="msg" maxLength={500} name="message" required={true} />
          <button type="submit">Submit</button>
        </Form>
      </Container>
    </>
  );
};
