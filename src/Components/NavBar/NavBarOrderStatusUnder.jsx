import { faClipboardList, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "rsuite";
import 'App.css'
import { useNavigate } from "react-router-dom";

const CustomNav = ({ active, onSelect, ...props }) => {
  const navigate = useNavigate();
  return (
    <Navbar className="NavBarTable"  style={{
      display: "flex",
      justifyContent: "space-between"

    }}>
      <Nav {...props} activeKey={active} onSelect={onSelect} >

          <Nav.Item eventKey="wait" ><FontAwesomeIcon icon={faClock} />En espera.</Nav.Item>
          <Nav.Item eventKey="preparing" ><FontAwesomeIcon icon={faClipboardList} />En preparación.</Nav.Item>
          <Nav.Item eventKey="finished" ><FontAwesomeIcon icon={faClipboardList} />Terminado.</Nav.Item>
          <Nav.Item eventKey="myOrder" ><FontAwesomeIcon icon={faClipboardList} />Mis pedidos.</Nav.Item>

    
      </Nav>
    </Navbar>
  );
};

export function NavOrderStatusUnder() {
  const [active, setActive] = useState("wait");
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
