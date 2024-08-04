import styled from "styled-components";
import bb1 from "../../../assets/images/bb-mainmenu.png";
import {
  StyledComponentDiv,
  media,
  colorScheme_main as color,
  PageWrapper,
} from "../../../components/styles";

export const Container = styled(PageWrapper)`
  color: ${color.white};

  .visit-app-store {
    text-decoration: none;
    color: white;
    align-self: center;
  }
`;
export const Header = styled.div`
  text-align: center;
  padding: 1rem;
  h1 {
    margin-bottom: 0;
  }
`;

export const Content = styled(StyledComponentDiv)`
  p {
    font-style: italic;
  }
  padding-bottom: 2rem;
`;
export const AnchorText = styled.div`
  font-family: "Montserrat", sans-serif;
  padding: 0;
`;
export const NewTabLink = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;
export const ImagesGroup = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
