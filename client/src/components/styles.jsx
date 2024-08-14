import { Link } from "react-router-dom";
import styled, { css, keyframes, createGlobalStyle } from "styled-components";

export const colorScheme_main = {};

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
  font-size: 1.35em;
  font-family: "Montserrat", sans-serif;
  padding-bottom: 100px;

  ${media.sm`
    font-size: 1em;
  
  `}
`;

export const SectionTitle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
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

export const ProjectImageCard = styled.div`
  border-radius: 8px;
  width: 45%;
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
  width:250px;
  background-position:center;
  `}
`;
export const PageWrapper = styled.div`
  background: ${colorScheme_main.oxfordblue};
`;
export const Button = styled.button`
  border: none;
  font-family: inherit;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1em;
`;
