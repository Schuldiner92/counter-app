import React from 'react';
import ReactDom from 'react-dom/client';
// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
import './styles.css';
import { CounterApp } from './CounterApp';



ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="¡Saludos!"/>
        {/* <CounterApp value={20}/> */}
    </React.StrictMode>
)
