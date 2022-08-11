
import React from "react";
import { Button, FlexboxGrid, Row, Col } from 'rsuite';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellConcierge, faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import './login.css'
export function LoginPage() {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <FlexboxGrid justify="center">
                    <Row>
                        <Col xs={24} className="center">
                            <img className="logo" style={{
                                width: "50%"
                            }} src="/image/logo.png" alt="" />
                        </Col>
                        <Col xs={24} className="center">
                            <Button className="btnLogin"//creo un boton
                                onClick={() => {//para que al hacerle click
                                    navigate("/SelectUser?tipo=cocinero")//este al seleccionar cocinero me dirija a la vista de seleccionar mi usuario filtrando solo los cocineros
                                }} appearance="primary">
                                <FontAwesomeIcon icon={faKitchenSet} />
                                Cocinero
                            </Button>
                        </Col>
                        <Col xs={24} className="center">
                            <Button className="btnLogin" onClick={() => {
                                navigate("/SelectUser?tipo=mesero")//este al seleccionar meseros me dirija a la vista de seleccionar mi usuario filtrando solo los meseros
                                }} appearance="primary">
                                <FontAwesomeIcon icon={faBellConcierge} />
                                Mesero
                            </Button>
                        </Col>
                    </Row>

                </FlexboxGrid>
            </div>
        </>
    )
}

