import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ContextAPI } from "./components/ContextAPI"
import axios from 'axios';

// axios.defaults.baseURL = "https://api.themoviedb.org/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextAPI>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextAPI>
);

reportWebVitals();
