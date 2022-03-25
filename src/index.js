import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reducer, { initialState } from './providers/reducer';
import { StateProvider } from './providers/StateProvider';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
