import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Pagina1() {
    const navigate = useNavigate();

    const [datos, setDatos] = useState([]);
    const [contador, setContador] = useState(0);

    const ObtenerDatos = () =>{
        setDatos([
            {
                nombre: "Camila"
            },
            {
                nombre: "Victor"
            }
        ])
    }

    useEffect(()=>{
        ObtenerDatos();
    },[]);

    return (
        <>
            <h1>Pagina 1</h1>
            <button onClick={() => {
               let datito = datos;
               datito.push({
                nombre: "Camila"
               });
               setDatos(datito);
               setContador(contador + 1);
               console.log(datito);
            }}>Hacia Pagina 2</button>

            {
                datos.map((elemento, index) => {
                    return (
                      
                            <div key={index} style={{
                                border: "solid 2px",
                                width: "200px",
                                height: "200px"
                            }}>
                                {elemento.nombre}
                            </div>
                        
                    )
                })

            }




        </>
    )
}