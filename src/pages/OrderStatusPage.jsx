import { NavOrderStatusUnder } from "Components/NavBar/NavBarOrderStatusUnder";
import { NavOrderStatusUp } from "Components/NavBar/NavBarOrderStatusUp";
import React from "react";
import { Content, Footer, Header } from "rsuite";

export function OrderStatusPage() {
    return (
        <>
            <div>
                <Header>
                <NavOrderStatusUp></NavOrderStatusUp>
                </Header>

                <Content>
                    holis
                </Content>

                <Footer className="footer">
                <NavOrderStatusUnder></NavOrderStatusUnder>
                </Footer>


            </div>
        </>
    )
}