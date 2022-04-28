import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  ensureRootElement()
);

function ensureRootElement() {
  let root = document.getElementById('cmdhop_root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'cmdhop_root';
    document.body.appendChild(root);
  }
  return root;
}
