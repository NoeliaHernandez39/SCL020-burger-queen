import { NavTableUnder } from "Components/NavBar/NavBarTableNumberUnder";
import { NavTableUp } from "Components/NavBar/NavBarTableNumberUp";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Content, Footer, Header, FlexboxGrid, Col, Grid, Row } from "rsuite";
import './waiterTable.css'
import 'App.css'

export function WaiterTableNumberPage() {//se crea una funcion donde se encuentran los números de las mesas
    const tableNumber = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
    ]
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Header>
                    <NavTableUp></NavTableUp> {/* traigo el NavBar superior de TableNumber, NavTableUp */}
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
                                                tableNumber.map((table, index) => {//con el .map creo un nuevo arreglo de mesas y las voy agregando
                                                    return (
                                                        <div key={index} >
                                                            <FlexboxGrid.Item style={{
                                                                marginBottom: "20px"
                                                            }} as={Col} md={5}>
                                                                <Button className="btnTable itemtable" onClick={()=>{
                                                                    navigate("/Menu?tipo=mesero&mesa="+ table)//al hacer click en el boton de cada mesa, en la url se agregará el numero de mesa seleccionado
                                                                }} appearance="primary"
                                                                    style={{
                                                                        padding: "30px",
                                                                        fontSize: "24px",
                                                                    }}
                                                                >Mesa: {table}</Button>   {/* al boton mesa le agrego el numero de las mesas de acuerdo a la cantidad que se haya asignado */}
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
            <Footer className="footer">{/* Al footer le creo una clase para que este se quede abajo de la pagina */}
                <NavTableUnder></NavTableUnder>{/* traigo el NavBar inferior de TableNumber, NavTableUnder */}
            </Footer>
        </>
    )
}
