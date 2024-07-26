import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  border: 0;
  padding: 0;
  background: blue;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "nav"
    "header"
    "projects"
    "skills"
    "about"
    "contact-me"
    ;
`;

export const HomeTitle = styled.h1`
  background-color: chocolate;
  color: white;
  grid-area: header;
`;
