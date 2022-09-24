import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Translate service
import i18next from 'i18next';
import { I18nextProvider, initReactI18next  } from 'react-i18next';
import global_es from './assets/i18n/es/global.json';
import global_en from './assets/i18n/en/global.json';

i18next
  .use(initReactI18next)
  .init({
  interpolation : { escapeValue : false },
  lng : "es",
  resources : {
    es : {
      translation : global_es
    },
    en : {
      translation : global_en
    },
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
