
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "rsuite";

export function LoginPage() {
    const navigate = useNavigate();
    return (
        <>
            <div>

                <button onClick={() => {
                    navigate("/SelectUser?tipo=mesero")
                }} className="btn-waiter">Mesero</button>
                <button onClick={() => {
                    navigate("/SelectUser?tipo=cocinero")
                }} className="btn-chef">Cocinero</button>


            </div>
        </>
    )
}