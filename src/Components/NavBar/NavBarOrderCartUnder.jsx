import { faBellConcierge, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Button, Nav, Navbar } from "rsuite";
import 'App.css'
import { useNavigate } from "react-router-dom";
import PaginaContext from "utils/pagina.context";



export function NavOrderUnder() {
  const navigate = useNavigate();
  const { carritoCompra, obtenerCarrito } = useContext(PaginaContext);

  return (
    <Navbar className="NavBarTable">
      <Navbar.Brand onClick={() => {
          navigate("/OrderStatus?tipo=mesero")
        }}>  <FontAwesomeIcon icon={faClipboardList} />
        Estado de pedidos</Navbar.Brand>

      <Nav pullRight>
        <Nav.Item eventKey="">
          <Button  className="btnSendOrder" onClick={() => {
            let hola = carritoCompra;
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
