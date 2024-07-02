import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavItems, NavItem, NavItemLanguage, Logo, ThemeSwitch, SwitchInput, SwitchLabel, SwitchSlider } from './NavbarStyles';
import logo from './assets/images/logo.png';

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
      <NavItems>
        <NavItem as={Link} to="/about">About</NavItem>
        <NavItem as={Link} to="/support">Support</NavItem>
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




/* import React from 'react';
import { NavContainer, NavItems, NavItem, NavItemLanguage, Logo, ThemeSwitch, SwitchInput, SwitchLabel, SwitchSlider } from './NavbarStyles';
import logo from './assets/images/logo.png'; // Adjust the path based on your folder structure

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      <Logo src={logo} alt="Logo" />
      <NavItems>
        <NavItem>About</NavItem>
        <NavItem>Support</NavItem>
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

export default Navbar; */