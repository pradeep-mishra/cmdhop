//import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'preact';
import './index.css';
import App from './components/App';

//ReactDOM.render(

render(<App />, ensureRootElement());

function ensureRootElement() {
  let root = document.getElementById('cmdhop_root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'cmdhop_root';
    document.body.appendChild(root);
  }
  return root;
}
