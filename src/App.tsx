import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import Paragraph from './components/Paragraph';
import About from './components/About';
import Support from './components/Support';
import enTranslations from './locales/en.json'; // Ajuste o caminho se necessário
import ptTranslations from './locales/pt.json'; // Ajuste o caminho se necessário

interface Translations {
  title: string; // Altere para title, já que é o único atributo
}

const App: React.FC = () => {
  const [language, setLanguage] = useState<string>('en');
  const translations: Translations = language === 'en' ? enTranslations : ptTranslations;

  return (
    <Router>
      <div id="App">
        <GlobalStyle />
        <Navbar setLanguage={setLanguage} />
        <Routes>
          <Route path="/" element={
            <>
              <Paragraph text={translations.title} /> {/* Passando a propriedade title para o Paragraph */}
              <About  /> {/* Ajuste conforme necessário */}
              <Support  /> {/* Ajuste conforme necessário */}
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
