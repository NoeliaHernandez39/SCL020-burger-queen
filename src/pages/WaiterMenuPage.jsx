import { NavMenuUnder } from "Components/NavBar/NavBarMenuUnder";
import { NavMenuUp } from "Components/NavBar/NavBarMenuUp";
import React from "react";
import 'App.css'
import { Content, Footer, Header } from "rsuite";

export function WaiterMenuPage() {
    return (
        <>
            <div>
                <Header>
                    <NavMenuUp></NavMenuUp>
                </Header>
                
                <Content>
                    <label>
                        Comidas jeje
                    </label>
                    {/* <AddItem nombreProducto="Desayuno XXXXXX" />
            <AddItem nombreProducto="Desayuno YYYYYY" />
            <AddItem nombreProducto="Desayuno ZZZZZZ" />
            <AddItem nombreProducto="Desayuno AAAAAAA" />
            <AddItem nombreProducto="Pizza"  /> */}
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