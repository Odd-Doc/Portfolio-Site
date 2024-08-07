import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import {
  StyledComponentDiv,
  colorScheme_main as color,
  media,
} from "../styles";

export const Container = styled(StyledComponentDiv)`
  background-color: ${color.platinum};
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  color: black;
  font-size: 1.1em;
  padding: 2rem;
  justify-content: space-between;
  ${media.sm`
    
    flex-direction: column;
  
        `}

  .footer-nav {
    text-decoration: none;
    color: black;
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
