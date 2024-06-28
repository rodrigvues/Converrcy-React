import React from 'react';
import GlobalStyle from './GlobalStyle';
import Converter from './components/Converter';
import Navbar from './components/Navbar';
import Paragraph from './components/Paragraph';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/about';
import Support from './pages/support/support';

const App: React.FC = () => {
  return (
    <div id="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
      </Routes>
      <Paragraph />
      <Converter />
    </div>
  );
}

export default App;
