import React from "react";
import { Provider } from 'react-redux';
import App from './App';
import { fetchItems } from './services/vmApi';
import store from './app/store'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <Provider store={store}>
        <App />
    </Provider>);
