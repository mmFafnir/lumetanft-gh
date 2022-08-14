import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './store';
import App from './App';
import './styles/index.css';

const basename= '/lumetanft-gh'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider basename={basename} store={store}>
    <BrowserRouter >
      <App />

    </BrowserRouter>
  </Provider>,
);
