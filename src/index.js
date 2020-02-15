import React from 'react';
import ReactDOM from 'react-dom';
import smoothScroll from 'smoothscroll-polyfill';
import App from './App';

smoothScroll.polyfill();

const el = document.getElementById('root');

ReactDOM.hydrate(<App context={window.APP_CONTEXT} />, el);
