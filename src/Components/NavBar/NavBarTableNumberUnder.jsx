import { faArrowRightToBracket, faCoffee, faKey, faLaptop, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "rsuite";

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Navbar>
      <Navbar.Brand > </Navbar.Brand>
      <Nav {...props} activeKey={active} onSelect={onSelect} >
        <Nav.Item eventKey="EstadoOrden">Estado de Pedidos</Nav.Item>
      </Nav>
    </Navbar>
  );
};

export function NavTableUnder() {
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