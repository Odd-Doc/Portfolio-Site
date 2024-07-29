import styled from "styled-components";
import { media, colorScheme_main as color } from "../components/styles";

export const Container = styled.div`
  background: ${color.blackolive};
  display: flex;
  flex-direction: row;
  ${media.sm`
  flex-direction: column;
  
  `}
`;
