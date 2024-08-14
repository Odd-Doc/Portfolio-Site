import styled from "styled-components";
import {
  Button,
  SectionTitle,
  StyledComponentDiv,
  colorScheme_main as color,
  media,
} from "../styles";
import { Link } from "react-router-dom";

export const Container = styled(StyledComponentDiv)`
  background-color: ${(props) => props.theme.colors.platinum};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  hr {
    height: 2px;
    width: 75%;
    border: none;
    background-color: ${(props) => props.theme.colors.orangeweb};
    margin-top: 80px;
  }
  .have-an-idea {
    color: ${(props) => props.theme.colors.oxfordblue};
  }
`;

export const Title = styled(SectionTitle)``;
export const ContactMeLink = styled(Link)`
  text-decoration: none;
  padding: 2rem;
  background-color: ${(props) => props.theme.colors.oxfordblue};
  color: ${(props) => props.theme.colors.platinum};
  border-radius: 10px;
  font-size: 1.2em;
  i {
    padding-right: 1rem;
    color: ${(props) => props.theme.colors.orangeweb};
  }
`;
export const IdeaImage = styled.img`
  position: relative;
  display: block;
  width: 500px;
  height: 500px;
  padding-top: 3rem;
  transition: 0.5s;
  bottom: -300px;
  z-index: 1;
  ${media.sm`
      width: 250px;
      height: 250px;
  `}
`;
