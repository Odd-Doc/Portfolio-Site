import styled from "styled-components";
import React from "react";
import { StyledComponentDiv } from "../components/styles";
import welcomeBgImg from "../assets/images/bg-welcome.jpg";

export const Container = styled.div`
  margin: 0;
  border: 0;
  padding: 0;
  background: #8f8fca;
`;

export const Header = styled.div`
  background-image: url(${welcomeBgImg});
`;

export const HomeTitle = styled.h1`
  color: white;
  grid-area: header;
  text-align: center;
  margin: 0;
`;
