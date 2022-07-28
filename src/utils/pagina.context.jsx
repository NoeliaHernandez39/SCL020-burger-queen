import { createContext, useState } from 'react'
import React from 'react';


const PaginaContext = createContext(null)

const PaginaProvider = ({ children }) => {

  const [tipoComida, setTipoComida] = useState("desayuno");
  const [carritoCompra, setCarritoCompra] = useState([]);

  const guardarCarrito = (item) => {
    let newCarrito = [
      ...carritoCompra,
      item
    ];
    localStorage.setItem("carrito", JSON.stringify(newCarrito));
    setCarritoCompra(newCarrito);
  }
  const obtenerCarrito = () =>{
    setCarritoCompra(JSON.parse(localStorage.getItem("carrito")) || []);
  }

  const data = { tipoComida, setTipoComida, carritoCompra, setCarritoCompra, guardarCarrito, obtenerCarrito }
  
  return <PaginaContext.Provider value={data}>{children}</PaginaContext.Provider>
}

export { PaginaProvider }
export default PaginaContext





// const btnLike = taskContainer.querySelectorAll(".btn-popCorn");
// btnLike.forEach(btn => {
//   btn.addEventListener("click", async (e) => {
    
//     e.preventDefault(); 
//     let task = (await getTasks(btn.dataset.id)).data();
//     let likesActuales = task.like;
//     let usuariosDieronLike = task.userlikes;
//     if(usuariosDieronLike.includes(auth.currentUser.uid)){
//       usuariosDieronLike.pop(auth.currentUser.uid);
//       UpdateTask(btn.dataset.id, {
//         "like": (Number(likesActuales) - 1),
//         "userlikes": usuariosDieronLike
//       });
//     }
//     else{
//       usuariosDieronLike.push(auth.currentUser.uid);
//       UpdateTask(btn.dataset.id, {
//         "like": (Number(likesActuales) + 1),
//         "userlikes": usuariosDieronLike
//       });
//     }
//     onGetTask2().then((x=>{
//       posts(x.docs, divFeed, containerRoot, where);
//     }));
//   });
// });
