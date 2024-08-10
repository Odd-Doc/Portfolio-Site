import styled, { css, keyframes } from "styled-components";
import bb1 from "../../../assets/images/bb-mainmenu.png";
import {
  StyledComponentDiv,
  media,
  colorScheme_main as color,
  PageWrapper,
} from "../../../components/styles";

export const Container = styled(StyledComponentDiv)`
  background-color: ${(props) => props.theme.colors.platinum};
  color: ${color.white};
  padding-bottom: 0;
  .visit-app-store {
    text-decoration: none;
    color: ${(props) => props.theme.colors.oxfordblue};
    align-self: center;
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

export const Content = styled(StyledComponentDiv)`
  p {
    font-style: italic;
  }
  padding-bottom: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
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
export const ImagesGroup = styled.div`
  background-color: ${color.platinum};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 70%;
  padding: 1rem;
  img {
  }
`;
const scale = keyframes`
	to {
		transform:
			scale(calc(1.1 - calc(0.1 * 4)));
	}
`;

export const StackingDeck = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  li {
  }
`;

export const StackingCard = styled.li`
  position: sticky;
  top: 0.75em;
  transform-origin: center;
  text-align: center;
  list-style: none;
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view()) {
      animation: ${scale} linear both;
      animation-timeline: view();
      animation-range: cover 0% contain 100%;
    }
  }
  ${media.sm`
    top: 50px
  `}

  img {
    border-radius: 12px;
    ${media.sm`
      width:350px;
    `}
  }
`;
