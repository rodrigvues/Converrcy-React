import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  isDarkTheme: boolean;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${({ isDarkTheme }) => (isDarkTheme ? '#C2A83E' : '#04471C')}; /* Alterna as cores */
    color: ${({ isDarkTheme }) => (isDarkTheme ? '#04471C' : '#E0EEC6')}; /* Alterna as cores */
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  #root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
