import styled from "styled-components";
import { Bar } from "../../components/navbar/style";

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
  width: 90%;
  input {
    height: 2.5rem;
    border: none;
    border-radius: 2px;
    font-size: 1.4rem;
    padding: 0.5rem;
  }
  textarea {
    height: 7rem;
    border: none;
    border-radius: 2px;
    font-size: 1.4rem;
    padding: 0.5rem;
    resize: none;
  }
  button {
    height: 3rem;
    border: none;
    border-radius: 2px;
    font-size: 1.4rem;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.4s ease-in-out;
  }
  button:hover {
    transition: 0.4s ease-in-out;
    background-color: ${(props) => props.theme.colors.orangeweb};
  }
`;
