import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Home } from './js/pages/home';

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
