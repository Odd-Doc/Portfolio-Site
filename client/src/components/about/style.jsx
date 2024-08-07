import styled, { keyframes, css } from "styled-components";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  SectionTitle,
} from "../styles";

const slideInLeft = keyframes`
 0% {
    transform: translateX(100%)
  }
  50%{
    transform: translateX(0%)

  }
  100% {
    transform: translateX(0%)
  }
`;
export const Container = styled(StyledComponentDiv)`
  margin: 0;
  padding: 1rem;
`;
export const Content = styled(StyledComponentDiv)`
  text-align: center;
  padding-left: 4rem;
  padding-right: 4rem;
`;
export const Title = styled(SectionTitle)`
  color: white;
`;
export const AvatarContainer = styled.div``;
export const Avatar = styled.div`
  img {
    border: 4px solid;
    border-radius: 50%;
    @media (prefers-reduced-motion: no-preference) {
      @supports (animation-timeline: scroll()) {
        animation: ${(props) =>
          props.theme.view
            ? css`
                ${slideInLeft};
              `
            : ""};
        animation-timeline: scroll();
      }
    }
  }
`;
