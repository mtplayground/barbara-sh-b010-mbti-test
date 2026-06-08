import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './styles.css';
import { App } from './App';
import { LanguageProvider } from './i18n';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Unable to mount app: #root element was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </LanguageProvider>
  </StrictMode>,
);
