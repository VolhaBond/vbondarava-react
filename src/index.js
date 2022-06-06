import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import { CardCtxProvider } from './context/card-context';
import { UserCtxProvider } from './context/user-context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserCtxProvider>
        <CardCtxProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CardCtxProvider>
    </UserCtxProvider>
);
