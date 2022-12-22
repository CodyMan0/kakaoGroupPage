import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { LoginProvider } from './context/LoginContext';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </LoginProvider>
  </React.StrictMode>
);
