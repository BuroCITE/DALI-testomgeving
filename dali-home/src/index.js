import React from 'react';
import { ReactDOM, createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthProvider } from './js/auth/useAuth';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <HashRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HashRouter>
);