import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const el = document.createElement('div');
document.body.appendChild(el);

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, el);
