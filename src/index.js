import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';  // Import Navbar component


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />  {/* Add Navbar here */}
    <Home />
   
  </React.StrictMode>
);
