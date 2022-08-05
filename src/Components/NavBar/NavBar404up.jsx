import { faArrowLeft, faArrowRightToBracket, faCoffee, faKey, faLaptop, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "rsuite";
import 'App.css'
import { useNavigate } from "react-router-dom";
import { BtnLogout } from "Components/btnLogout";

const CustomNav = ({ active, onSelect, ...props }) => {
    const navigate = useNavigate();
    return (
        <Navbar className="NavBarTable">

            <Nav>
                <Nav.Item onClick={() => {
            navigate (-1)//en caso de que el usuario ingrese mal a una url con el boton volver podrá regresar a la pagina anteior 
          }}><FontAwesomeIcon icon={faArrowLeft} /> Volver</Nav.Item>
            </Nav>

        </Navbar>
    );
};

export function NavBar404up() {
    const [active, setActive] = useState("");
    return (
        <>
            <Container>
                <div>
                    <CustomNav appearance="tabs" reversed active={active} onSelect={
                        (valor) => {
                            setActive(valor);
                        }} />
                </div>

            </Container>
        </>
    )
}