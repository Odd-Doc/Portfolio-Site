import styled from "styled-components";
import { Bar } from "../../components/navbar/style";
import { media } from "../../components/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.oxfordblue};
  height: 100vh;
`;

export const Navbar = styled(Bar)``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 75%;
  input {
    height: 2.5rem;
    border: none;
    border-radius: 2px;
    font-size: 1.4rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors.platinum};
  }
  textarea {
    height: 7rem;
    border: none;
    border-radius: 2px;
    font-size: 1.4rem;
    padding: 0.5rem;
    resize: none;
    background-color: ${(props) => props.theme.colors.platinum};
  }
  button {
    height: 3rem;
    border: none;
    border-radius: 2px;
    font-size: 1.4rem;
    padding: 0.5rem;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    transition: 0.4s ease-in-out;
    color: ${(props) => props.theme.colors.oxfordblue};
    background-color: ${(props) => props.theme.colors.platinum};
  }
  button:hover {
    transition: 0.4s ease-in-out;
    background-color: ${(props) => props.theme.colors.orangeweb};
  }
  label {
    color: ${(props) => props.theme.colors.platinum};
    font-weight: 400;
    font-size: 1.2em;
    ${media.sm`
    text-align: center;
      
    `}
  }
`;
