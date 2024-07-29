import styled from "styled-components";
import avatar from "../../assets/images/avatar.png";

import { media } from "../styles";
export const Container = styled.div`
  color: white;
  height: 100vh;
  
`;

export const Avatar = styled.div`
  padding-left: 0;
  padding-right: 0;
  ${media.sm`
    padding-left: 0;
  padding-right: 0;

  `}
  div {
    border-style: solid;
    border-color: white;
    border-width: 2px;
    display: flex;
    border-radius: 50%;
  }
  img {
    /* without this, the avatar img overflows 
    when the screen width is less than the image */

    max-width: 100%;
  }
`;
