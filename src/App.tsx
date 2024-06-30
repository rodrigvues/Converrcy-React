import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Converter from './components/Converter';
import Navbar from './components/Navbar';
import Paragraph from './components/Paragraph';
import About from './pages/about/About';
import Support from './pages/support/Support';

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
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
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