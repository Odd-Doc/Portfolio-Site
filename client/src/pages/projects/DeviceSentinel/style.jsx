import styled, { css, keyframes } from "styled-components";
import {
  StyledComponentDiv,
  media,
  colorScheme_main as color,
} from "../../../components/styles";
import { Bar } from "../../../components/navbar/style";
import { Link } from "react-router-dom";

export const Container = styled(StyledComponentDiv)`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.platinum};
  padding-bottom: 0;
  margin: 0 auto;
`;
export const Header = styled.div`
  h1 {
    margin: 0;
  }
  //position: relative; --> fixes issue with safari browsers not maintaining aspect ratio
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-content: center;
  text-align: center;
  height: 100vh;
  color: ${(props) => props.theme.colors.platinum};
  background-color: ${(props) => props.theme.colors.oxfordblueTransparent};
  padding: 2rem;
  .bb-icon {
    border-radius: 24%;
    width: 25%;
    align-self: center;
    margin-bottom: 2rem;

    ${media.sm`
      width:50%;
    `}
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.platinum};
    font-size: 0.9em;
  }
  .git-hub-link--header {
    margin-top: 1rem;
  }
  .app-store-badge {
    width: 140px;
    padding: 0;
    margin-top: 2rem;
  }
  i {
    padding-left: 0.5rem;
  }
`;

export const Content = styled.div`
  p {
    /* font-style: italic; */
  }

  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;
export const AnchorText = styled.div`
  font-family: "Montserrat", sans-serif;
  padding: 0;
`;
export const NewTabLink = styled.span`
  font-size: 1.1em;
  display: flex;
  justify-content: center;
`;

const scale = keyframes`
	to {
		transform:
			scale(calc(1.25 - calc(0.1 * 4)));
	}
`;
export const Main = styled.div`
  width: 80vw;
  text-align: center;
  margin: 0 auto;
  display: block;
`;
export const StackingDeck = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 0;
`;

export const StackingCard = styled.li`
  position: sticky;
  transform-origin: center;
  top: 0;
  list-style: none;
  display: flex;
  overflow: hidden;
  justify-content: center;
  border-radius: 12px;
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      animation: ${scale} linear both;
      animation-timeline: view();
      animation-range: cover 0% contain 50%;
    }
  }
  ${media.sm`
  
  top: 50px;
    
  `}

  img {
    width: 100vw;

    ${media.sm`
      height:35vh;
    `};
  }
`;
export const Navbar = styled(Bar)``;
export const FooterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const BackToTop = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.platinum};
  padding-bottom: 2rem;
  padding-top: 2rem;
  & a {
    display: block;
    padding: 1rem;
    border-radius: 12px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.oxfordblue};
    background-color: ${(props) => props.theme.colors.orangeweb};
  }
`;
