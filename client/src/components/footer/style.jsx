import styled from "styled-components";

import {
  StyledComponentDiv,
  colorScheme_main as color,
  media,
} from "../styles";

export const Container = styled(StyledComponentDiv)`
  background-color: ${color.platinum};
`;

export const Content = styled(StyledComponentDiv)`
  display: flex;
  gap: 1rem;
  color: black;
  font-size: 1.1em;
  padding: 3rem;
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
