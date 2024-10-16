import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App'; // Remova o GlobalStyle daqui
import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer';

const rootElement = document.getElementById('root');
const footerRootElement = document.getElementById('footer-root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App /> {/* GlobalStyle está sendo aplicado dentro de App.tsx */}
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element.');
}
/*
if (footerRootElement !== null) {
  const footerRoot = ReactDOM.createRoot(footerRootElement);
  footerRoot.render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the footer root element.');
}

reportWebVitals();*/
