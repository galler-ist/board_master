import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import i18n configuration
import './i18n';
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.Suspense>
  </React.StrictMode>
);
