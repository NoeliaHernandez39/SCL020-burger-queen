import { createContext, useState } from "react";
import React from "react";

const PaginaContext = createContext(null);

const PaginaProvider = ({ children }) => {
  const [tipoComida, setTipoComida] = useState("desayuno");
  const [carritoCompra, setCarritoCompra] = useState([]);

  const guardarCarrito = (item) => {
    let existe = carritoCompra.find((x) => x.id === item.id); //buscamos por el id si es que dentro de carrito compra se encuentra el producto (en el item)
    if (existe === undefined) {
      //en caso de que no exista
      let newCarrito = [
        //creamos una variable nueva
        ...carritoCompra, //copiamos todo lo que esta en el carrito
        {
          //agregamos un elemento nuevo al arreglo
          ...item, //copiamos ese item
          cantidad: 1, //le agregamos el atributo de cantidad que comienza en 1
        },
      ];
      localStorage.setItem("carrito", JSON.stringify(newCarrito)); //JSON.stringify() convierte un objeto en texto
      //locarstorage lo que tengo guardado en el navegador
      // setItem, set= guarda algo, en este caso guarda el carrito
      // con JSON.stringify convierto el carrito en un texto
      setCarritoCompra(newCarrito);
      // a la variable carritoCompra se le modifica el valor usando la funcion setCarritoCompra, por el valor de newCarrito
      // newCarrito es igual a lo que originalmente tenia carritoCompra, y se le agrego el nuevo item, al cual se le agrego el atributo cantidad con valor 1
    } else {
      // en caso de que si exista el producto
      let newCarrito = carritoCompra.map(function (element) {
        //creamos una nueva variable donde recorra el carrito
        if (item.id === element.id) {
          //en caso de que coincida el id del producto que se quiera agregar con el id del producto que está en el carrito
          return {
            //devuelveme
            ...element, //copiamos todo lo que contiene ese producto que está en el carrito
            cantidad: element.cantidad + 1, //pero le modificamos la cantidad sumandole 1 cada vez que este se quiera agregar
          };
        } else {
          return element; //en caso de que no coincidan los id, devolverlo tal cual como está
        }
      });
      localStorage.setItem("carrito", JSON.stringify(newCarrito)); //JSON.stringify() convierte un objeto en texto
      //locarstorage lo que tengo guardado en el navegador
      // setItem, set= guarda algo, en este caso guarda el carrito
      // con JSON.stringify convierto el carrito en un texto
      setCarritoCompra(newCarrito);
      // a la variable carritoCompra se le modifica el valor usando la funcion setCarritoCompra, por el valor de newCarrito
      // newCarrito es igual a lo que originalmente tenia carritoCompra, y se le agrego el nuevo item, al cual se le agrego el atributo cantidad con valor 1
    }
  };

  const quitarCarrito = (item) => {
    let existe = carritoCompra.find((x) => x.id === item.id); //buscamos por el id si es que dentro de carrito compra se encuentra el producto (en el item)

    if (existe === undefined) {
      //en caso de que no exista
      return "";
    } else {
      // en caso de que si exista el producto
      let newCarrito = carritoCompra.map(function (element) {
        //creamos una nueva variable donde recorra el carrito

        if (item.id === element.id) {
          //en caso de que coincida el id del producto que se quiera quitar con el id del producto que está en el carrito
          if (element.cantidad === 0) {
            return element;
          } else {
            return {
              //devuelveme
              ...element, //copiamos todo lo que contiene ese producto que está en el carrito
              cantidad: element.cantidad - 1, //pero le modificamos la cantidad quitandole   1 cada vez que este se quiera agregar
            };
          }
        } else {
          return element; //en caso de que no coincidan los id, devolverlo tal cual como está
        }
      });

      localStorage.setItem("carrito", JSON.stringify(newCarrito.filter(x=> x.cantidad !== 0 ))); //JSON.stringify() convierte un objeto en texto
      //locarstorage lo que tengo guardado en el navegador
      // setItem, set= guarda algo, en este caso guarda el carrito
      // con JSON.stringify convierto el carrito en un texto
      setCarritoCompra(newCarrito.filter(x=> x.cantidad !== 0 ));
      // a la variable carritoCompra se le modifica el valor usando la funcion setCarritoCompra, por el valor de newCarrito
      // newCarrito es igual a lo que originalmente tenia carritoCompra, y se le agrego el nuevo item, al cual se le agrego el atributo cantidad con valor 1
    }
  };

  const obtenerCarrito = () => {
    setCarritoCompra(JSON.parse(localStorage.getItem("carrito")) || []);
  };

  const data = {
    tipoComida,
    setTipoComida,
    carritoCompra,
    setCarritoCompra,
    guardarCarrito,
    obtenerCarrito,
    quitarCarrito,
  };

  return (
    <PaginaContext.Provider value={data}>{children}</PaginaContext.Provider>
  );
};

export { PaginaProvider };
export default PaginaContext;

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
