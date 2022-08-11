
import { NavBar404up } from "Components/NavBar/NavBar404up";
import React, { useContext, useEffect } from "react";
import { Col, Content, FlexboxGrid, Footer, Grid, Header, Row } from "rsuite";


export function NotFound() {
    return (
        <>
            <div>
                <Header>
                    <NavBar404up></NavBar404up>
                </Header>

                <Content>
                    <FlexboxGrid justify="center">
                        <Grid>
                            <Row>
                                <Col xs={24} className="center">
                                    <img className="logo-404" style={{
                                        width: "20%"
                                    }} src="/image/logo.png" alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} className="center">
                                    <img className="imagen404" src="/image/404.png" alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} className="center">
                                    <h1 className="table" >
                                        Creo que estás perdido
                                    </h1><br></br>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={24} className="center">
                                    <label>No te preocupes, pulsa "VOLVER" para regresar a la pagína anterior.</label>
                                </Col>
                            </Row>
                        </Grid>
                    </FlexboxGrid>
                </Content>

                <Footer className="footer">
                </Footer>


            </div>
        </>
    )
}