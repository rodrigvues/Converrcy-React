import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavItems, NavItemLanguage, Logo, ThemeSwitch, SwitchInput, SwitchLabel, SwitchSlider } from './NavbarStyles';
import logo from './assets/images/logo.png';

interface NavbarProps {
  language: string; // Adicionando a prop para saber qual idioma está selecionado
  setLanguage: (lang: string) => void; 
}

const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
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
          {language === 'en' ? 'EN' : 'PT'} {/* Exibe "EN" ou "PT" com base no idioma atual */}
        </NavItemLanguage>
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
