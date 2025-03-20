// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // for React 18+
import App from './App'; // Import the main app component
import './index.css'

// Create a root element in the DOM (target the div with id "root")
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
