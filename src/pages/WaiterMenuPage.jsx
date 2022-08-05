import { NavMenuUnder } from "Components/NavBar/NavBarMenuUnder";
import { NavMenuUp } from "Components/NavBar/NavBarMenuUp";
import React, { useContext } from "react";
import 'App.css'
import { Content, Footer, Header, Placeholder } from "rsuite";
import PaginaContext from "utils/pagina.context";
import { ProductoItem } from "Components/producto";

const comida = [
    {
        id: 1,
        nombre: "Campo",
        tipo: "desayuno",
        precio: "$3000",
        descripcion: "Pan amasado, omelette de huevo y tocino."
    },
    {
        id: 2,
        nombre: "Bosque",
        tipo: "desayuno",
        precio: "$4500",
        descripcion: "Waffles con frutos rojos, platano chocolate y helado."
    },
    {
        id: 3,
        nombre: "Chocolata",
        tipo: "desayuno",
        precio: "$2000",
        descripcion: "Leche con chocolate, trozos de chocolate y malvaviscos."
    },
    {
        id: 4,
        nombre: "Bosque",
        tipo: "desayuno",
        precio: "$4500",
        descripcion: "Waffles con frutos rojos, platano chocolate y helado."
    },
    {
        id: 5,
        nombre: "Té con canela",
        tipo: "desayuno",
        precio: "$1000",
        descripcion: "Té de hoja con ramitas de canela."
    },
    {
        id: 6,
        nombre: "Cheese Roll",
        tipo: "almuerzo",
        precio: "$4500",
        descripcion: "Queso crema, palta, cebollín envuelto en palta, salmón, mixto o crispys."
    },
    {
        id: 7,
        nombre: "Tori Crispy",
        tipo: "almuerzo",
        precio: "$5200",
        descripcion: "Pollo furai, queso crema, cebollín, envuelto en palta y cubierto de papas hilo."
    },    {
        id: 8,
        nombre: "Americana Familiar",
        tipo: "almuerzo",
        precio: "$5000",
        descripcion: "Jamón, carne, salchicha italiana, pepperoni y extra queso"
    },    {
        id: 9,
        nombre: "Deluxe",
        tipo: "almuerzo",
        precio: "$5000",
        descripcion: "Pepperoni, cebolla, pimiento verde, salchicha italiana y champiñón"
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
                                <div key={index}>{/* cuando tenga map y me retorne un html debe ir un key en el primer elemento*/}
                                    <ProductoItem
                                        dataItem={x}
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