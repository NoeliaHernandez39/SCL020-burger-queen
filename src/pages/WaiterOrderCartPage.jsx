import { NavOrderUnder } from "Components/NavBar/NavBarOrderCartUnder";
import { NavOrderUp } from "Components/NavBar/NavBarOrderCartUp";
import React from "react";
import { Content, Footer, Header } from "rsuite";

export function WaiterOrderCartPage() {
    return (
        <>
            <div>
                <Header>
                <NavOrderUp></NavOrderUp>
                </Header>
               
                <Content>
                <label>Pedido número 1234</label>
                <label>Mesa </label>
                </Content>
               
                <Footer className="footer">
                <NavOrderUnder></NavOrderUnder>
                </Footer>

                
            </div>
        </>
    )
}