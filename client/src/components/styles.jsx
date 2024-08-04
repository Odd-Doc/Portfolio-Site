import { Link } from "react-router-dom";
import styled, { css, keyframes, createGlobalStyle } from "styled-components";
export const colorScheme_main = {
  black: "#000000ff",
  oxfordblue: "#14213dff",
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

export const StyledComponentDiv = styled.div`
  color: white;
  font-family: "Montserrat", sans-serif;
  padding: 1rem;
  font-size: 1.25em;
  ${media.sm`
    font-size: 1em;
  
  `}
`;

export const SectionTitle = styled.div`
  top: 0;
  position: sticky;
  background-color: ${colorScheme_main.oxfordblue};
  color: white;
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
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  height: 510px;
  background-size: cover;
  background-color: blue;
  text-decoration: none;
  display: block;
  color: inherit;
  background-position: center center;

  ${media.sm`
  height: 250px;
  `}
`;
export const PageWrapper = styled.div`
  background: ${colorScheme_main.oxfordblue};
`;
