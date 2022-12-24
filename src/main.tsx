import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { LoginProvider } from './context/LoginContext';

import GlobalFonts from './style/fonts/fonts';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <LoginProvider>
          <App />
        </LoginProvider>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
