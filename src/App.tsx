import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Converter from './components/Converter';
import Navbar from './components/Navbar';
import Paragraph from './components/Paragraph';
import AboutPage from './pages/about/About';
import SupportPage from './pages/support/Support';
import About from './components/About';
import Support from './components/Support';

const App: React.FC = () => {
  return (
    <Router>
      <div id="App">
        <GlobalStyle />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Paragraph />
              <Converter />
              < About />
              < Support />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




/* import React from 'react';
import GlobalStyle from './GlobalStyle';
import Converter from './components/Converter';
import Navbar from './components/Navbar';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div id="App">
      <GlobalStyle />
      <Navbar />
      <Paragraph />
      <Converter />
    </div>
  );
}

export default App; */