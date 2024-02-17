import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM from 'react-dom' instead of 'react-dom/client'
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error('Cannot find element');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}



