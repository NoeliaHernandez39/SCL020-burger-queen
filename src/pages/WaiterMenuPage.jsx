import { NavMenuUnder } from "Components/NavBar/NavBarMenuUnder";
import { NavMenuUp } from "Components/NavBar/NavBarMenuUp";
import React from "react";

export function WaiterMenuPage() {
    return (
        <>
            <div>
            <NavMenuUp></NavMenuUp>
            <label>
                Comidas
            </label>

            {/* <AddItem nombreProducto="Desayuno XXXXXX" />
            <AddItem nombreProducto="Desayuno YYYYYY" />
            <AddItem nombreProducto="Desayuno ZZZZZZ" />
            <AddItem nombreProducto="Desayuno AAAAAAA" />
            <AddItem nombreProducto="Pizza"  /> */}
            </div>
            <NavMenuUnder></NavMenuUnder>
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