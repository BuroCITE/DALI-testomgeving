import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Home } from './js/pages/home';
import { Login } from './js/pages/inlog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
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