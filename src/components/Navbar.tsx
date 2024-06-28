import React from 'react';
import { NavContainer, NavItems, NavItem, NavItemLanguage, Logo, ThemeSwitch, SwitchInput, SwitchLabel, SwitchSlider } from './NavbarStyles';
import logo from './assets/images/logo.png'; // Adjust the path based on your folder structure
import about from '../pages/about/about'
import support from '../pages/support/support'
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <Logo src={logo} alt="Logo" />
      <NavItems>
        <NavItem>
          <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/support">Support</Link>
        </NavItem>
        <NavItemLanguage>EN</NavItemLanguage>
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