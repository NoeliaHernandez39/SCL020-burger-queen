import React, { useState } from "react";
import './menu.css';

export function Menu() {
    const [valorMsj, setValorMsj] = useState("Hola");

    const Boton = () => {
        setValorMsj("Hola Camila");
    }

    return (
        <>
            <label>{valorMsj}</label>
            <button className="btn" onClick={() => {
                Boton();
            }} >Pulsame</button>

        </>


    )
}