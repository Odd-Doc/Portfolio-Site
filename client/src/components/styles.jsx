import { Link } from "react-router-dom";
import styled, { css, keyframes, createGlobalStyle } from "styled-components";

export const colorScheme_main = {
  black: "#000000ff",
  oxfordblue: "#14213dff",
  oxfordblueTransparent: "#14213dd7",
  orangeweb: "#fca311ff",
  platinum: "#e5e5e5ff",
  white: "#ffffffff",
};

const device = {
  xs: "400px",
  sm: "600px",
  md: "900px",
  lg: "1280px",
  xl: "1440px",
  xxl: "1920px",
};

export const media = {
  xs: (...args) => css`
    @media (max-width: ${device.xs}) {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media (max-width: ${device.sm}) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (max-width: ${device.md}) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (max-width: ${device.lg}) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (max-width: ${device.xl}) {
      ${css(...args)};
    }
  `,
  xxl: (...args) => css`
    @media (max-width: ${device.xxl}) {
      ${css(...args)};
    }
  `,
};
const reveal = keyframes`
  	from {
		opacity: 0;
		clip-path: inset(45% 20% 45% 20%);
	}
	to {
		opacity: 1;
		clip-path: inset(0% 0% 0% 0%);
	}
`;

export const StyledComponentDiv = styled.div`
  color: white;
  font-family: "Montserrat", sans-serif;
  padding: 1rem;
  font-size: 1.25em;
  .project-card {
    transform: ${(props) =>
      props.theme.view ? "translateX(0%)" : "translateX(200%)"};
    transition: 1s;
    .project-title-wrapper {
      position: fixed;
      transform: ${(props) =>
        props.theme.view ? "translateX(-15%)" : "translateX(-500%)"};
      border-radius: 5px;
      transition: 2s;
      padding: 2rem;
      bottom: -10px;
      background-color: ${colorScheme_main.oxfordblueTransparent};
      ${media.sm`
      font-size: 0.9em;
      padding:1rem;
  `}
    }
  }
  ${media.sm`
    font-size: 1em;
  
  `}
`;

export const SectionTitle = styled.div`
  /* top: 0;
  position: sticky; */
  color: ${colorScheme_main.oxfordblue};
  margin: 0;
  text-align: center;
  padding-bottom: 2rem;
`;

const growProgress = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

const slideInRight = keyframes`
 0% {
    transform: translateX(-20%)
  }
  100% {
    transform: translateX(0%)
  }
`;
const slideInLeft = keyframes`
 0% {
    transform: translateX(20%)
  }
  100% {
    transform: translateX(0%)
  }
`;

export const ProgressBar = styled.div`
  /* width: 20%;
  height: 12px;
  background-color: ${colorScheme_main.orangeweb};
  @media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: scroll()) {
      animation: ${growProgress} linear;
      animation-timeline: scroll();
    }
  } */
`;

export const StyledCard = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 200px;
  padding-bottom: 200px;
`;
export const ProjectImageCard = styled(Link)`
  border-radius: 4px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  height: 550px;
  background-size: cover;
  background-color: blue;
  text-decoration: none;
  display: block;
  color: inherit;
  background-position: center center;
  box-shadow: black -20px 10px 75px;

  ${media.sm`
  height: 250px;
  background-position:center;
  `}
`;
export const PageWrapper = styled.div`
  background: ${colorScheme_main.oxfordblue};
`;
