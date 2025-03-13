import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box; /* Garante que margens e paddings não expandam os elementos */
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Evita scroll lateral */
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden; /* Impede que a página tenha largura extra */
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #04471C;
    color: #E0EEC6;
    display: flex;
    flex-direction: column;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  #root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;


/*
#root {
    padding: 20px; 
  }*/