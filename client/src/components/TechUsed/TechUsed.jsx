import React from "react";
import { Container } from "./style";

function TechUsed({ used }) {
  return (
    <Container>
      <h4>Technology</h4>
      <div>
        <ul>
          {used.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    </Container>
  );
}

export default TechUsed;
