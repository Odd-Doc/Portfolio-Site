import styled from "styled-components";
import { media } from "../styles";
export const Container = styled.div`
  h4 {
    margin: 0;
    padding-bottom: 1rem;
  }
  ul {
    margin: 0;
  }

  background-color: ${(props) => props.theme.colors.oxfordblue};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 200px;
  margin-right: 200px;
  margin-bottom: 2rem;
  border-radius: 8px;
  padding: 2rem;
  ${media.md`
      margin-left: 100px;
  margin-right: 100px;
  `}
  ${media.sm`
      margin-left: 0;
  margin-right: 0;
  `}
`;
