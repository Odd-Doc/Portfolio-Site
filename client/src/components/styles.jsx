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
`;

export const SectionTitle = styled.div`
  top: 0;
  position: sticky;
  background-color: ${colorScheme_main.oxfordblue};
  color: white;
  h3 {
    margin: 0;
    text-align: center;
  }
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

export const StyledCard = styled.div``;
export const ProjectImage = styled.img`
  max-width: 100%;
  display: block;
  border-radius: 4px;
`;
export const PageWrapper = styled.div`
  background: ${colorScheme_main.oxfordblue};
  display: flex;
  flex-direction: column;
  ${media.sm`
    flex-direction: column;
  
  `}
`;
