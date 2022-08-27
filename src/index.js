// import "dotenv/config"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ('bootstrap/dist/css/bootstrap.min.css');
import ('./css/index.css');
// console.log(process.env);
// console.log("--------------------------gggg------");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
