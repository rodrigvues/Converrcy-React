import React from 'react';
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

export default App;