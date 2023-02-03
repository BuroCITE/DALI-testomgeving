import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Home } from './js/pages/home';
import { Login } from './js/pages/inlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

export function renderHome(){
  return(
    root.render(
      <>
        <Home />
      </>
    )
  );
}

export function renderInlog(){
  return(
    root.render(
      <>
        <Login/>
      </>
    )
  );
}