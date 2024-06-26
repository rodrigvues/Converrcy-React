import React from 'react';
import { NavContainer, NavItems, NavItem, Logo, ThemeSwitch, SwitchInput, SwitchLabel, SwitchSlider } from './NavbarStyles';
import logo from './assets/images/logo.png'; // Adjust the path based on your folder structure

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <Logo src={logo} alt="Logo" />
      <NavItems>
        <NavItem>About</NavItem>
        <NavItem>More Projects</NavItem>
        <NavItem>Support</NavItem>
        <ThemeSwitch>
          <SwitchInput type="checkbox" id="themeSwitch" />
          <SwitchLabel htmlFor="themeSwitch">
            <SwitchSlider />
          </SwitchLabel>
        </ThemeSwitch>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;