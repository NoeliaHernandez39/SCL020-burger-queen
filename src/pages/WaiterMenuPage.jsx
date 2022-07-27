import { NavMenuUnder } from "Components/NavBar/NavBarMenuUnder";
import { NavMenuUp } from "Components/NavBar/NavBarMenuUp";
import React, { useContext } from "react";
import 'App.css'
import { Content, Footer, Header } from "rsuite";
import PaginaContext from "utils/pagina.context";
const comida = [
    {
        id: 1,
        nombre: "Huevo con queso",
        tipo: "desayuno",
        precio: "$1000",
        descripcion: "2 Huevos de gallina contenta con queso mantecoso la vaquita"
    },
    {
        id: 2,
        nombre: "Huevo con jamon",
        tipo: "desayuno",
        precio: "$1000",
        descripcion: "2 Huevos de gallina contenta con queso mantecoso la vaquita"
    },
    {
        id: 3,
        nombre: "Sushi 10 piezas",
        tipo: "almuerzo",
        precio: "$5000",
        descripcion: "1 roll de 10 piezas con camaron, queso crema y cebollin"
    },
    {
        id: 4,
        nombre: "Sushi 10 piezas",
        tipo: "almuerzo",
        precio: "$5000",
        descripcion: "1 roll de 10 piezas con camaron, queso crema y cebollin"
    },
]
export function WaiterMenuPage() {
    const { tipoComida } = useContext(PaginaContext);

    return (
        <>
            <div>
                <Header>
                    <NavMenuUp></NavMenuUp>
                </Header>

                <Content>
                    {
                        comida.filter(x=>x.tipo === tipoComida).map((x, index) => {
                            return (
                                <div key={index}>
                                    <label>{x.nombre}</label>
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