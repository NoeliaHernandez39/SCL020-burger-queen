import { NavMenuUnder } from "Components/NavBar/NavBarMenuUnder";
import { NavMenuUp } from "Components/NavBar/NavBarMenuUp";
import React, { useContext, useEffect, useState } from "react";
import 'App.css'
import { Content, Footer, Header, Placeholder } from "rsuite";
import PaginaContext from "utils/pagina.context";
import { ProductoItem } from "Components/producto";
import { ObtenerMenuAlmuerzo, ObtenerMenuDesayuno } from "hola/inith";


export function WaiterMenuPage() {
    const { tipoComida } = useContext(PaginaContext);

    const [food, setFood] = useState([]);

    useEffect(()=>{
        const obtenerDatos = async () => {

            let datos = [];
            if(tipoComida === "desayuno"){
                datos = await ObtenerMenuDesayuno();
            }
            if(tipoComida === "almuerzo"){
                datos = await ObtenerMenuAlmuerzo();
            }

            setFood(datos.map(x=>{
                return {
                    id: x.id,
                    nombre: x.Nombre,
                    tipo: x.Tipo,
                    precio: x.Precio,
                    descripcion: x.Descripción
                }
            }));
        }
        obtenerDatos();
    },[tipoComida]);


    return (
        <>
            <div>
                <Header>
                    <NavMenuUp></NavMenuUp>
                </Header>

                <Content>
                    
                    {
                        food.map((x, index) => {
                            return (
                                <div key={index}>{/* cuando tenga map y me retorne un html debe ir un key en el primer elemento*/}
                                    <ProductoItem
                                        dataItem={x}
                                        dondeEstoy="menu"
                                    />
                                </div>
                            )
                        })
                    }
                    
                </Content>

                <Footer className="footer">
                    <NavMenuUnder></NavMenuUnder>
                </Footer>
            </div>

        
        </>
    
    )
      
}



{/* <div>
<button
    onClick={() => {
        setCount(count + 1);
    }}
>+</button>
<label>{count}</label>
<button
    onClick={() => {
        if (count > 0) {
            setCount(count - 1);

        }
    }}
>-</button>
</div>
<div>{props.nombreProducto}</div> */}