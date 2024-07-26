import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  border: 0;
  padding: 0;
  background: #8f8fca;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "nav"
    "header"
    "projects"
    "skills"
    "about"
    "contact-me";
`;

export const HomeTitle = styled.h1`
  color: white;
  grid-area: header;
  text-align: center;
  background-color: aquamarine;
  margin: 0;
`;
