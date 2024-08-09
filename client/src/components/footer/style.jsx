import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import {
  StyledComponentDiv,
  colorScheme_main as color,
  media,
} from "../styles";

export const Container = styled(StyledComponentDiv)`
  position: relative;
  background-color: ${color.oxfordblue};
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  color: white;
  font-size: 1.1em;

  padding: 2rem;
  justify-content: space-between;
  ${media.sm`
    
    flex-direction: column;
  
        `}

  .footer-nav {
    text-decoration: none;
    color: white;
  }
`;
export const IconGroup = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 2rem;
  img {
    height: 16px;
  }
`;
export const NavLink = styled(HashLink)`
  text-decoration: none;
  color: inherit;
`;
export const IdeaImage = styled.img`
  position: absolute;
  width: 500px;
  height: 500px;
  transition: 0.5s;
  bottom: 0;
  top: 2982px;
  left: 0;
  right: 0;

  ${media.sm`
      width: 250px;
      height: 250px;
  `}
`;
