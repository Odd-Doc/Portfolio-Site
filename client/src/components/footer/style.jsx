import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import {
  StyledComponentDiv,
  colorScheme_main as color,
  media,
} from "../styles";

export const Container = styled.div`
  position: relative;
  /* padding-top: 5rem;
  padding-bottom: 5rem;
  padding-left: 5rem;
  padding-right: 5rem; */
  background-color: ${(props) => props.theme.colors.oxfordblue};
  ${media.sm`
    
    flex-direction: column;
  /* padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem; */
        `}
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  color: white;
  font-size: 1.1em;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  margin-left: 30%;
  margin-right: 30%;
  font-size: 1.25em;
  ${media.sm`
    padding:3rem;
    flex-direction: column;
    align-items:flex-start;
    margin:0;
  
  `}

  .footer-nav {
    text-decoration: none;
    color: white;
  }
  .cr {
    font-size: 0.7em;
    padding-top: 2rem;
  }
`;
export const IconGroup = styled.div`
  /* padding-top: 1rem; */
  display: flex;
  gap: 2rem;
  img {
    height: 16px;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.platinum};
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
