import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Container,
  Bar,
  Projects,
  Skills,
  About,
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
        <Logo href="#">GP_</Logo>
        <NavbarMenu $isActive={isActive}>
          <NavbarItem>
            <NavLink href="#">Projects</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="#">About</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink href="#">Contact</NavLink>
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
