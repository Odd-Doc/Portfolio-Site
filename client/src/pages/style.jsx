import styled from "styled-components";
import React from "react";
import { media } from "../components/styles";
import welcomeBgImg from "../assets/images/bg-welcome.jpg";
import welcomeBgImg2 from "../assets/images/bg-welcome2.png";
import avatar from "../assets/images/avatar.png";

export const Container = styled.div`
  background: #8f8fca;
`;

export const Header = styled.div`
  background-image: url(${welcomeBgImg2});
  background-size: cover;
  color: white;
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.sm`
    flex-direction: column;
  `}
`;
export const Avatar = styled.div`
  padding-right: 5rem;
  ${media.sm`
    padding-left: 0;
  padding-right: 0;

  `}
  div {
    border-style: solid;
    border-color: white;
    border-width: 5px;
    display: flex;
    border-radius: 50%;
  }
  img {
    /* without this, the avatar img overflows 
    when the screen width is less than the image */

    max-width: 100%;
  }
`;
