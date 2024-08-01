import styled from "styled-components";
import {
  StyledComponentDiv,
  media,
  colorScheme_main as color,
} from "../styles";

export const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: white;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const BurgerBar = styled.span`
  display: block;
  width: 30px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: black;
  /* transform: ${(props) =>
    props.theme.active ? "transformY(8px) rotate(45deg)" : ""}; */
`;

export const Burger = styled.div`
  display: none;
  height: 100%;
  ${media.sm`
    display: block;
    cursor: pointer;
   & ${BurgerBar}:nth-child(2) {
        opacity: ${(props) => (props.theme.active ? "0" : "100%")};

    }
   & ${BurgerBar}:nth-child(1){
      transform: ${(props) =>
        props.theme.active ? "translateY(8px) rotate(45deg)" : ""};
    }
   & ${BurgerBar}:nth-child(3) {
        transform: ${(props) =>
          props.theme.active ? "translateY(-8px) rotate(-45deg)" : ""};
    }

   
  `}
`;

export const NavbarMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  ${media.sm`
    position: fixed;
        top: 3rem;
        /* left:-100%;   */
        left: ${(props) => (props.theme.active ? "0" : "-100%")};
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        border-radius: 2px;
        text-align: center;
        transition: 0.3s;
        box-shadow:
            0 10px 27px rgba(0, 0, 0, 0.05);
            

   
    a {
      color: black;
    }
  `}
`;

export const NavbarItem = styled.li`
  list-style: none;
  margin-left: 4rem;

  ${media.sm`
    margin: 2.5rem 0;

    padding:0;
    
  `}
`;
export const NavLink = styled.a`
  font-size: 1.2em;
  font-weight: 400;
  color: black;
  &:hover {
    color: #fca311ff;
  }
`;
export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  color: #482ff7;
`;
export const About = styled(NavbarItem)``;
export const Projects = styled(NavbarItem)``;
export const Skills = styled(NavbarItem)``;
