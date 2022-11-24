import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Components/Layout/Layout';
//import logo from "./logo.svg";
//import { ReactComponent as LogoReact } from "./logo.svg";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Titolo</h1>
    <Layout />
    {/*metodo 1 per inserire SVG e immagini*/} {/*CONSIGLIATO PER LE IMMAGINI*/}
    {/* <img src={logo} />*/}
    {/*metodo 2 per inserire SVG*/} {/*CONSIGLIATO PER GLI SVG*/}
    {/* <LogoReact />*/}
  </React.StrictMode>
);
