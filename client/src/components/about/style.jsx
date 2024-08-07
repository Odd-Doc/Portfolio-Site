import styled from "styled-components";
import {
  StyledComponentDiv,
  colorScheme_main as color,
  SectionTitle,
} from "../styles";

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
export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  img {
    border: 4px solid;
    border-radius: 50%;
  }
`;
