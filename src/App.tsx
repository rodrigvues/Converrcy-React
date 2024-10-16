import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import Paragraph from './components/Paragraph';
import About from './components/About';
import Support from './components/Support';
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';
import { Translations } from './types'; 
import Converter from './components/Converter';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [language, setLanguage] = useState<string>('en');
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Estado para o tema
  const translations: Translations = language === 'en' ? enTranslations : ptTranslations;

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <Router>
      <div id="App">
        <GlobalStyle isDarkTheme={isDarkTheme} /> {/* Passando o tema para o GlobalStyle */}
        <Navbar language={language} setLanguage={setLanguage} toggleTheme={toggleTheme} /> {/* Passando a função toggleTheme */}
        <Routes>
          <Route path="/" element={
            <>
              <Paragraph translations={translations} />
              <Converter translations={translations} />
              <About     translations={translations} /> 
              <Support   translations={translations} />
              <Footer    translations={translations} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
