import logo from './logo.svg';
import 'rsuite/dist/rsuite.min.css';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Rutas } from 'Rutas';
import { PaginaProvider } from 'utils/pagina.context';
function App() {
  return (
    <>
      <PaginaProvider>
        <Rutas />
      </PaginaProvider>

    </>);
}

export default App;
