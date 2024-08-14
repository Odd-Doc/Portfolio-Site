import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.oxfordblue};
`;

export const MessageCard = styled.div`
  /* background-color: ${(props) => props.theme.colors.platinum}; */
  background-color: black;
  color: chartreuse;
  padding: 2rem;
  border-radius: 12px;
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
export const Confirmation = styled.div`
  opacity: 0;
  animation-name: ${confirm};
  animation-delay: 4.5s;
  animation-fill-mode: forwards;
`;
