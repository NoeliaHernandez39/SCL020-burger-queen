import { faArrowRightToBracket, faCoffee, faKey, faLaptop, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "rsuite";

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Navbar>
      <Navbar.Brand > </Navbar.Brand>
      
      <Nav {...props} activeKey={active} onSelect={onSelect} >
        <Nav.Item eventKey=" "></Nav.Item>
        <Nav.Item eventKey=" "></Nav.Item>
      </Nav>

      <Nav pullRight>
        <Nav.Item ><FontAwesomeIcon icon={faArrowRightToBracket} />  Cerrar Sesión</Nav.Item>
        </Nav>
    </Navbar>
  );
};

export function NavTableUp() {
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