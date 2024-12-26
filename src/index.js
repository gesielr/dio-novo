import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StyleSheetManager } from 'styled-components';
import { GlobalStyle } from '../src/globalStyles'; // Importe os estilos globais

// Encontra o elemento root no DOM
const rootElement = document.getElementById('root');

// Cria a instância do root usando createRoot
const root = ReactDOM.createRoot(rootElement);

// Renderiza o aplicativo no root
root.render(
  <React.StrictMode>
    <StyleSheetManager disableVendorPrefixes={true}>
      <GlobalStyle /> {/* Adicione o estilo global */}
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
