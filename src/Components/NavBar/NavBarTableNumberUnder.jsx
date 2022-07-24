import { faArrowRightToBracket, faCoffee, faKey, faLaptop, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "rsuite";
import './NavBarTable.css'

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Navbar className="NavBarTable">
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