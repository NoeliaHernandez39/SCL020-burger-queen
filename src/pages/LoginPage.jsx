
import React from "react";
import { Button, FlexboxGrid, Row, Col, Grid } from 'rsuite';
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
                        <Col xs={24}  className="center">
                            <Button className="btnLogin"
                                onClick={() => {
                                    navigate("/SelectUser?tipo=cocinero")
                                }} color="red" appearance="primary">
                                    <FontAwesomeIcon icon={faKitchenSet} /> 
                                Cocinero
                            </Button>
                        </Col>
                        <Col xs={24} className="center">
                            <Button className="btnLogin" onClick={() => {
                                navigate("/SelectUser?tipo=mesero")
                            }} color="red" appearance="primary">
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

