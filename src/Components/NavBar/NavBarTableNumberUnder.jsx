import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "rsuite";
import 'App.css'
import { useNavigate } from "react-router-dom";

const CustomNav = ({ active, onSelect, ...props }) => {
  const navigate = useNavigate();
  return (
    <Navbar className="NavBarTable">
      <Navbar.Brand > </Navbar.Brand>
      <Nav {...props} activeKey={active} onSelect={onSelect} >
        <Nav.Item eventKey="EstadoOrden"onClick={() => {
          navigate("/OrderStatus?tipo=mesero")
        }}><FontAwesomeIcon icon={faClipboardList} />Estado de Pedidos</Nav.Item>
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
