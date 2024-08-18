import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this imports global styles
import App from './App'; // Import the App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the App component inside the root element
);
