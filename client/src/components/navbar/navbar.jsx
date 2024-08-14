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
    const screenWidth = window.screen.width;
    let yOffset = 0; // Adjust the offset to your liking
    let screenCheck = (sizeToCheck, screen) => {
      const res = screen <= sizeToCheck ? true : false;
      return res;
    };
    switch (true) {
      case screenCheck(375, screenWidth):
        yOffset = -65;
        break;
      default:
        yOffset = 55;
        break;
    }

    let y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <ThemeProvider theme={theme}>
      <Bar>
        <Logo to="#">GP_</Logo>
        <NavbarMenu $isActive={isActive}>
          <NavbarItem>
            <NavLink
              to="#projects"
              scroll={scrollTo}
              onClick={handleBurgerClick}
            >
              Projects
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="#about" scroll={scrollTo} onClick={handleBurgerClick}>
              About
            </NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink
              to="#contact"
              scroll={scrollTo}
              onClick={handleBurgerClick}
            >
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
