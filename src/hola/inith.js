import { db } from "./config.js";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ObtenerMesero = async () => {
  const q = query(collection(db, "Usuario"), where("Tipo", "==", "Mesero"));
  let docs = await getDocs(q);
  let datos = docs.docs.map(x=>x.data());
  return datos;
};

export const ObtenerCocinero = async () =>{
  const q = query(collection(db, "Usuario"), where("Tipo", "==", "Cocinero"));//creamos la consulta 
  let docs = await getDocs(q);//obtenemos los documentos que nos arrojó la consulta
  let datos = docs.docs.map(x=>x.data());//obtenemos los datos de los documentos, despues de esos documentos le hacemos un map a cada uno de los documentos para crear un arreglo nuevo por cada uno de ellos 
  return datos;
};

export const ObtenerMenuDesayuno = async () =>{
  const q = query(collection(db, "Menu"), where("Tipo", "==", "Desayuno"));
  let docs = await getDocs(q);
  let datos = docs.docs.map(x=>x.data());
  return datos;
};

export const ObtenerMenuAlmuerzo = async () =>{
  const q = query(collection(db, "Menu"), where("Tipo", "==", "Almuerzo"));
  let docs = await getDocs(q);
  let datos = docs.docs.map(x=>x.data());
  return datos;
}

