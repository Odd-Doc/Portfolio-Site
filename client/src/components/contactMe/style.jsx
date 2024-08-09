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
  background-color: ${color.platinum};
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    height: 2px;
    width: 75%;
    border: none;
    background-color: ${color.orangeweb};
    margin-top: 100px;
  }
  .have-an-idea {
    padding-bottom: 20px;
    padding-top: 200px;
    color: ${color.oxfordblue};
  }
`;

export const Title = styled(SectionTitle)``;
export const ContactMeLink = styled(Link)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  padding: 2rem;
  background-color: ${color.oxfordblue};
  color: ${color.platinum};
  border-radius: 10px;
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
