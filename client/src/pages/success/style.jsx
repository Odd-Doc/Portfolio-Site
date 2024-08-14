import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-left: 32%;
  padding-right: 32%;
  background-color: ${(props) => props.theme.colors.oxfordblue};
`;

const loading = keyframes`
0% {
  color: transparent;
}
50% {
  color:chartreuse;
}
100% {
  color: transparent;
}

`;
export const LoadDot = styled.div`
  color: transparent;
`;
export const LoadDots = styled.div`
  display: flex;
  ${LoadDot}:nth-child(1) {
    animation-name: ${loading};
    animation-duration: 0.9s;
    animation-delay: 1.6s;
    animation-iteration-count: 3;
  }
  ${LoadDot}:nth-child(2) {
    animation-name: ${loading};
    animation-duration: 0.9s;
    animation-delay: 1.7s;
    animation-iteration-count: 3;
  }
  ${LoadDot}:nth-child(3) {
    animation: ${loading};
    animation-duration: 0.9s;
    animation-delay: 1.8s;
    animation-iteration-count: 3;
  }
`;
const confirm = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
    
`;
const backToHome = keyframes`
    from{
        opacity: 0;

    }
    to{
        opacity: 1;
    }
    
`;
export const Confirmation = styled.div`
  opacity: 0;
  animation-name: ${confirm};
  animation-delay: 4.5s;
  animation-fill-mode: forwards;
`;
export const MessageCard = styled.div`
  background-color: black;
  color: chartreuse;
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;
export const BackToHome = styled.div`
  opacity: 0;
  animation-name: ${backToHome};
  animation-duration: 2s;
  animation-delay: 4.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  display: flex;
  text-align: center;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.oxfordblue};
    background-color: ${(props) => props.theme.colors.orangeweb};
    padding: 1rem;
    justify-content: stretch;
    border-radius: 5px;
  }
`;
