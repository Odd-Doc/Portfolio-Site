import styled, { css, keyframes, withTheme } from "styled-components";

export const colorScheme = {
  caribbeanCurrent: "#16697a",
  moonstone: "#489fb5ff",
  skyblue: "#82c0ccff",
  isabelline: "#ede7e3ff",
  orangepeel: "#ffa62bff",
};
export const colorScheme_main = {
  blackolive: "#1f271bff",
  blackolive_transparent: "#1f271bf2",
  paynesgray: "#19647eff",
  verdigris: "#28afb0ff",
  naplesyellow: "#f4d35eff",
  sandybrown: "#ee964bff",
  offwhite: "#fffcf3",
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
`;
const growAnimation = keyframes`
  

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const SectionTitle = styled.div`
  top: 0;
  position: sticky;

  /* text-align: center; */
  background-color: ${colorScheme_main.blackolive_transparent};
  color: ${colorScheme_main.offwhite};
  h3 {
    margin: 0;
  }
  div {
    width: 20px;
    height: 3px;
    background-color: ${colorScheme_main.sandybrown};
    margin-top: 0;
    padding: 0;
    animation: ${growAnimation} 2s linear infinite;
  }
`;

export const StyledCard = styled.div`
  height: 200px;
  border-style: solid;
  margin: 2rem;
  border-radius: 15px;
`;
