import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Col, FlexboxGrid, Grid, Row, SelectPicker } from 'rsuite';
import { GetDataInStorage, SaveDataInStorage } from "utils/storage";
import './selectUser.css'


const user = [
    {
        value: 1,
        label: "Camila"
    }
];

export function SelectUserPage() {
    const [searchParams, setSearchParams] = useSearchParams();//con el searchParams lo utilizamos para extraer datos que se encuentran en la URL 
    const navigate = useNavigate();
    return (
        <>
            <div>
                <FlexboxGrid justify="center">
                    <Grid>
                        <Row>
                            <Col xs={24} className="center">
                                <img className="logo" style={{
                                    width: "30%"
                                }} src="/image/logo.png" alt="" />
                            </Col>
                            <Col xs={24} className="center">
                                <h1 className="user" >
                                    SELECCIONA TU USUARIO
                                </h1>

                            </Col>

                        </Row>
                        <Row>
                            <Col xs={6} className="center">
                                <h4 className="col-md-2">{
                                    searchParams.get("tipo").toLowerCase() === "mesero" ? "Mesero" :
                                    //con searchParams extraigo el tipo desde la url y le digo que independiente de como se haya escrito este quede todo en minuscula y retorne "Mesero" 
                                        searchParams.get("tipo").toLowerCase() === "cocinero" ? "Cocinero" : ""
                                }</h4>
                            </Col>
                            <Col xs={18} className="center">
                                <SelectPicker
                                    style={{
                                        width: "100%"
                                    }} data={user} />
                            </Col>
                            <Col xs={24} className="center">
                                <Button className="btnBegin" onClick={() => {
                                    let seleccionado = "";
                                    SaveDataInStorage("user", {
                                    });
                                    let user = GetDataInStorage("user");
                                    localStorage.getItem("user");//traemos el usuario que se haya seleccionado 
                                    if (searchParams.get("tipo").toLowerCase() === "mesero") {//si ese usuario fue de tipo mesero
                                        navigate("/TableNumber")//la siguiente pagina que verá será la de seleccionar mesa
                                    }
                                    if (searchParams.get("tipo").toLowerCase() === "cocinero") {//pero si el usuario que seleccionamos es de tipo cocinero
                                        navigate("/OrderStatus")//la siguiente pagina que verá será del estado en la que se encuentran los pedidos 
                                    }
                                }} appearance="primary">
                                    Comenzar</Button>
                            </Col>
                            <Col xs={24} className="center">
                                <Button className="btnvolver" onClick={() => {
                                    navigate("/")
                                }} appearance="primary">
                                    Volver</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} className="center">
                                <h2>¡Que tengas un excelente día de trabajo!</h2>

                            </Col>

                        </Row>
                    </Grid>

                </FlexboxGrid>
            </div>
        </>
    )
}
