import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const el = document.getElementById('root');

ReactDOM.hydrate(<App context={window.APP_CONTEXT} />, el);
