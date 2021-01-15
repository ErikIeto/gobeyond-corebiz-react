import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { teste } from "./App"; //quando não é padrão, exporta dessa forma, em uma pagina é recomendavél ter apenas um export defaul

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


