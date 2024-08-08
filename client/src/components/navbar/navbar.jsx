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

  const scrollTo = (el) => {
    const yOffset = -200; // Adjust the offset to your liking
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Bar>
        <Logo to="#">GP_</Logo>
        <NavbarMenu $isActive={isActive}>
          <NavbarItem>
            <NavLink to="#projects" scroll={scrollTo}>
              Projects
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="#about" scroll={scrollTo}>
              About
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="#contact" scroll={scrollTo}>
              Contact
            </NavLink>
          </NavbarItem>
        </NavbarMenu>
        <div onClick={handleBurgerClick}>
          <Burger className="nav-burger">
            <BurgerBar></BurgerBar>
            <BurgerBar></BurgerBar>
            <BurgerBar></BurgerBar>
          </Burger>
        </div>
      </Bar>
    </ThemeProvider>
  );
};
