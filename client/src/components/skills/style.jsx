import styled, { keyframes, css } from "styled-components";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  SectionTitle,
  media,
} from "../styles";
const reveal = keyframes`
	from {
		opacity: 0;
    transform: translateY(100%)
		
	}
	to {
		opacity: 1;
    transform: translateY(0%)
		
	}
`;

export const Container = styled(StyledComponentDiv)`
  margin: 0;
  padding: 1rem;
  background-color: ${color.platinum};
  i {
  }
`;
export const Icon = styled.i`
  font-size: 5em;
  && {
    animation: ${(props) =>
      props.theme.inView
        ? css`
            ${reveal} ${props.id * 0.2}s
          `
        : ""};
  }
`;

export const Content = styled(StyledComponentDiv)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  gap: 1rem;
`;

export const Title = styled(SectionTitle)`
  color: ${color.oxfordblue};
  padding: 2rem;
  ${media.sm`
  padding-bottom: 0.5rem;
  
  `};
`;
