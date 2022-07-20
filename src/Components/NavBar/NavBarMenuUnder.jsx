import { faArrowRightToBracket, faCoffee, faKey, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "rsuite";

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Navbar>
      <Navbar.Brand >  <FontAwesomeIcon icon={faKey} />
        CamiCosas</Navbar.Brand>
      
      <Nav {...props} activeKey={active} onSelect={onSelect} >
        <Nav.Item eventKey="desayuno">Desayuno</Nav.Item>
        <Nav.Item eventKey="almuerzo">Almuerzo</Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item ><FontAwesomeIcon icon={faArrowRightToBracket} /> Back</Nav.Item>
      </Nav>
    </Navbar>
  )
};

export function NavMenuUnder() {
  const [active, setActive] = useState("desayuno");
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