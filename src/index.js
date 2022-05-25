import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import {CardCtxProvider} from './context/card-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CardCtxProvider>
        <App />
    </CardCtxProvider>
);
