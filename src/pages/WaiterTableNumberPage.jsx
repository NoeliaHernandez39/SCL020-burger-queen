import { NavTableUnder } from "Components/NavBar/NavBarTableNumberUnder";
import { NavTableUp } from "Components/NavBar/NavBarTableNumberUp";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Content, Footer, Header, FlexboxGrid, Col, Grid, Row } from "rsuite";
import './waiterTable.css'

export function WaiterTableNumberPage() {
    const tableNumber = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
    ]
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Header>
                    <NavTableUp></NavTableUp>
                </Header>
                <Content>
                    <FlexboxGrid justify="center">
                        <Grid>
                            <Row>
                                <Col xs={24} className="center">
                                    <h1 className="table" >
                                        SELECCIONA UNA MESA
                                    </h1>
                                </Col>
                            </Row>
                            <Container>
                                <Content>
                                    <div className="show-grid">
                                        <FlexboxGrid justify="center">
                                            {
                                                tableNumber.map((table, index) => {
                                                    return (
                                                        <div key={index} >
                                                            <FlexboxGrid.Item style={{
                                                                marginBottom: "20px"
                                                            }} as={Col} md={5}>
                                                                <Button className="btnTable itemtable" onClick={()=>{
                                                                    navigate("/Menu?tipo=mesero?mesa="+ table)
                                                                }} appearance="primary"
                                                                    style={{
                                                                        padding: "30px",
                                                                        fontSize: "24px",
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
                            </Container>
                        </Grid>
                    </FlexboxGrid>
                </Content>
            </div>
            <Footer className="footer">
                <NavTableUnder></NavTableUnder>
            </Footer>
        </>
    )
}
