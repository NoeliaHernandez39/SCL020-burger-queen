import { NavOrderUnder } from "Components/NavBar/NavBarOrderCartUnder";
import { NavOrderUp } from "Components/NavBar/NavBarOrderCartUp";
import { ProductoItem } from "Components/producto";
import React, { useContext, useEffect } from "react";
import { Content, Footer, Header } from "rsuite";
import PaginaContext from "utils/pagina.context";

export function WaiterOrderCartPage() {
    const { carritoCompra, obtenerCarrito } = useContext(PaginaContext);
    useEffect(()=>{
        obtenerCarrito();
    },[])
    return (
        <>
            <div>
                <Header>
                <NavOrderUp></NavOrderUp>
                </Header>
               
                <Content>
               {
                carritoCompra.map((x, index)=>{
                    return (
                        <div key={index}>{/* cuando tenga map y me retorne un html debe ir un key en el primer elemento*/}
                            <ProductoItem
                                dataItem={x} dondeEstoy={"carrito"}                            />
                        </div>
                    )
                })
               }
                </Content>
               
                <Footer className="footer">
                <NavOrderUnder></NavOrderUnder>
                </Footer>

                
            </div>
        </>
    )
}