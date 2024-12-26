import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #121214; /* Cor de fundo global */
    color: white; /* Texto padrão */
    height: 100vh; /* Garante que o body ocupe a altura total */
    width: 100vw; /* Garante que o body ocupe a largura total */
    overflow-x: hidden; /* Evita rolagem horizontal */
  }
`;
