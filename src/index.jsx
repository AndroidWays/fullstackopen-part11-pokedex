import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
        <App />
    </BrowserRouter>
);
