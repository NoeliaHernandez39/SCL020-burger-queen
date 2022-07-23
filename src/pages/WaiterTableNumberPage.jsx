import { NavTableUnder } from "Components/NavBar/NavBarTableNumberUnder";
import { NavTableUp } from "Components/NavBar/NavBarTableNumberUp";
import React from "react";
import { Button, Container, Content, Footer, Header, FlexboxGrid, Col } from "rsuite";

export function WaiterTableNumberPage() {
    const tableNumber = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]
    return (
        <>
            <div>
                <NavTableUp></NavTableUp>
                <Container>
                    <Header></Header>
                    <Content>
                        <div className="show-grid">
                            <FlexboxGrid justify="center">
                                {
                                    tableNumber.map((table, index) => {
                                        return (
                                            <div key={index}>
                                                <FlexboxGrid.Item  style={{
                                                    marginBottom: "20px"

                                                }} as={Col} md={5}>
                                                    <Button  appearance="primary" style={{
                                                        padding: "30px",
                                                        fontSize: "25px",
                                                        backgroundColor: "#FF43AA"
                                                    }}
                                                    >Mesa: {table}</Button>
                                                </FlexboxGrid.Item>
                                            </div>


                                        )
                                    })
                                }
                            </FlexboxGrid>
                        </div>
                    </Content>
                    <Footer></Footer>
                </Container>
            </div>
            <NavTableUnder></NavTableUnder>
        </>
    )
}