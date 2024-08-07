import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Bar,
  Logo,
  NavbarMenu,
  NavbarItem,
  Burger,
  BurgerBar,
  NavLink,
} from "./style";
export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };
  const theme = {
    active: isActive,
  };

  return (
    <ThemeProvider theme={theme}>
      <Bar>
        <Logo to="#">GP_</Logo>
        <NavbarMenu $isActive={isActive}>
          <NavbarItem>
            <NavLink to="#projects">Projects</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="#about">About</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="#contact">Contact</NavLink>
          </NavbarItem>
        </NavbarMenu>
        <div onClick={handleBurgerClick}>
          <Burger>
            <BurgerBar></BurgerBar>
            <BurgerBar></BurgerBar>
            <BurgerBar></BurgerBar>
          </Burger>
        </div>
      </Bar>
    </ThemeProvider>
  );
};
