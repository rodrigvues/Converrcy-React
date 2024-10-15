import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: #04471C;
    color: #E0EEC6;
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
    box-sizing: border-box; /* Ensure padding doesn't affect the width/height calculation */
  }
`;

export default GlobalStyle;

/*
#root {
    padding: 20px; 
  }*/