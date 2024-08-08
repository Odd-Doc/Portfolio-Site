import styled from "styled-components";
import {
  Button,
  SectionTitle,
  StyledComponentDiv,
  colorScheme_main as color,
} from "../styles";

export const Container = styled(StyledComponentDiv)`
  background-color: ${color.platinum};
  text-align: center;
  padding-bottom: 250px;

  hr {
    height: 1px;
    border: none;
    background-color: ${color.orangeweb};
    margin-top: 100px;
  }
  .have-an-idea {
    padding-bottom: 20px;
    padding-top: 100px;
    color: ${color.oxfordblue};
  }
`;

export const Title = styled(SectionTitle)``;
export const ContactMeButton = styled.div`
  background-color: ${color.oxfordblue};
  color: ${color.platinum};
`;
