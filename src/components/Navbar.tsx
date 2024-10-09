import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavItems, NavItemLanguage, Logo, ThemeSwitch, SwitchInput, SwitchLabel, SwitchSlider } from './NavbarStyles';
import logo from './assets/images/logo.png';
import enTranslations from '../locales/en.json';
import ptTranslations from '../locales/pt.json';

interface NavbarProps {
  setLanguage: (lang: string) => void; // Define a tipagem para setLanguage
}

const Navbar: React.FC<NavbarProps> = ({ setLanguage }) => {
  return (
    <NavContainer>
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
      <NavItems>
        {/* Botões para mudar de idioma */}
        <NavItemLanguage onClick={() => setLanguage('en')}>EN</NavItemLanguage>
        <NavItemLanguage onClick={() => setLanguage('pt')}>PT</NavItemLanguage>
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
