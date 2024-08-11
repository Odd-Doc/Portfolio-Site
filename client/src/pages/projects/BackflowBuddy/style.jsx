import styled, { css, keyframes } from "styled-components";
import bb1 from "../../../assets/images/bb-mainmenu.png";
import {
  StyledComponentDiv,
  media,
  colorScheme_main as color,
  PageWrapper,
} from "../../../components/styles";

export const Container = styled(StyledComponentDiv)`
  display: block;

  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.platinum};
  padding-bottom: 0;
  margin: 0 auto;
  .visit-app-store {
    text-decoration: none;
    color: ${(props) => props.theme.colors.oxfordblue};

    margin-bottom: 27px;
    span {
      margin-bottom: 2rem;
    }
  }
`;
export const Header = styled.div`
  h1 {
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 100vh;
  color: ${(props) => props.theme.colors.platinum};
  background-color: ${(props) => props.theme.colors.oxfordblue};
  padding: 2rem;
`;

export const Content = styled.div`
  p {
    font-style: italic;
  }
  /* display: block; */
  margin: 0 auto;
  padding-bottom: 2rem;
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
			scale(calc(1.1 - calc(0.1 * 4)));
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
  top: 10px;
  transform-origin: center;
  list-style: none;
  display: flex;
  /* padding-top: 100px; */
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
  
    
  `}

  img {
    width: 80vw;
    ${media.sm`
      width:90vw;
    `}
  }
`;
