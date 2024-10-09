import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import Paragraph from './components/Paragraph';
import About from './components/About';
import Support from './components/Support';
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';
import { Translations } from './types'; // Se você estiver usando o tipo Translations

const App: React.FC = () => {
  const [language, setLanguage] = useState<string>('en');
  const translations: Translations = language === 'en' ? enTranslations : ptTranslations;

  return (
    <Router>
      <div id="App">
        <GlobalStyle />
        <Navbar language={language} setLanguage={setLanguage} /> {/* Passando a prop language */}
        <Routes>
          <Route path="/" element={
            <>
              <Paragraph translations={translations} />
              <About  /> 
              <Support  />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
