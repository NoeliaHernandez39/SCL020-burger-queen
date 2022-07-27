import { faArrowRightToBracket, faBellConcierge, faClipboardList, faCoffee, faKey, faLaptop, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Container, Input, Nav, Navbar } from "rsuite";
import 'App.css'
import { useNavigate } from "react-router-dom";



export function NavOrderUnder() {
  const navigate = useNavigate();
  return (
    <Navbar className="NavBarTable">
      <Navbar.Brand onClick={() => {
          navigate("/OrderStatus")
        }}>  <FontAwesomeIcon icon={faClipboardList} />
        Estado de pedidos</Navbar.Brand>

      <Nav pullRight>
        <Nav.Item eventKey="">
          <Button  className="btnSendOrder" onClick={() => {
            navigate("/TableNumber?tipo=mesero")
          }} appearance="primary">
            <FontAwesomeIcon icon={faBellConcierge} />
            Enviar Pedido
          </Button>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}
