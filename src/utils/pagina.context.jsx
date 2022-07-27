import { createContext, useState } from 'react'
import React from 'react';


const PaginaContext = createContext(null)

const PaginaProvider = ({ children }) => {








  const [ tipoComida, setTipoComida] = useState("desayuno");


  const mostrarMensaje = () => {
    alert('hola');
  }

  const data = { tipoComida, setTipoComida, mostrarMensaje }






  return <PaginaContext.Provider value={data}>{children}</PaginaContext.Provider>
}

export { PaginaProvider }
export default PaginaContext