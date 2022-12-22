import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { LoginProvider } from './context/LoginContext';
import GlobalStyle from './style/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginProvider>
      <GlobalStyle />
      <BrowserRouter basename="/kakaoGroupPage/">
        <App />
      </BrowserRouter>
    </LoginProvider>
  </React.StrictMode>
);
