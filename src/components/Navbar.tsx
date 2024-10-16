import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavItems, NavItemLanguage, Logo, ThemeSwitch, SwitchInput, SwitchLabel, SwitchSliderChecked } from './NavbarStyles';
import logo from './assets/images/logo.png';

interface NavbarProps {
  language: string;
  setLanguage: (lang: string) => void;
  toggleTheme: () => void;  // Agora a prop toggleTheme é aceita
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, toggleTheme }) => {
  // Toggle language function
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <NavContainer>
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
      <NavItems>
        <NavItemLanguage onClick={toggleLanguage}>
          {language === 'en' ? 'EN' : 'PT'}
        </NavItemLanguage>
        <ThemeSwitch>
          <SwitchInput type="checkbox" id="themeSwitch" onChange={toggleTheme} />
          <SwitchLabel htmlFor="themeSwitch">
            <SwitchSliderChecked />
          </SwitchLabel>
        </ThemeSwitch>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
