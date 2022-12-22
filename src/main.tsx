import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoginProvider } from './context/LoginContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </React.StrictMode>
);
