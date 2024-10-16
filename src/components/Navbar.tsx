import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavItems, NavItemLanguage, Logo, ThemeSwitch, SwitchInput, SwitchLabel, SwitchSlider } from './NavbarStyles';
import logo from './assets/images/logo.png';

interface NavbarProps {
  language: string;
  setLanguage: (lang: string) => void;
  toggleTheme: () => void; // Adicionando a prop para alternar o tema
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage, toggleTheme }) => {
  // Função para alternar o idioma
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
          <SwitchInput type="checkbox" id="themeSwitch" onChange={toggleTheme} /> {/* Chamando toggleTheme ao clicar */}
          <SwitchLabel htmlFor="themeSwitch">
            <SwitchSlider />
          </SwitchLabel>
        </ThemeSwitch>
      </NavItems>
    </NavContainer>
  );
};

export default Navbar;
