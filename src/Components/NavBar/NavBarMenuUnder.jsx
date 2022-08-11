import { faClipboardList, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Container, Input, Nav, Navbar } from "rsuite";
import 'App.css'
import { useNavigate } from "react-router-dom";
import PaginaContext from "utils/pagina.context";

const CustomNav = ({ active, onSelect, ...props }) => {
  const navigate = useNavigate();
  const { carritoCompra, obtenerCarrito } = useContext(PaginaContext);
  useEffect(()=>{
    obtenerCarrito();
  },[]);

  const cantidadProductos = () => {

    let sum = 0;
    for (let i = 0; i < carritoCompra.length; i++) {
        sum += carritoCompra[i].cantidad;
    }
    return(sum);
  }
  return (
    <Navbar className="NavBarTable">
      <Navbar.Brand onClick={() => {
          navigate("/OrderStatus?tipo=mesero")
        }}><FontAwesomeIcon icon={faClipboardList} />
        Estado de pedidos</Navbar.Brand>

      <Nav activeKey={active} onSelect={onSelect} >
        <Nav.Item eventKey=""> <Input placeholder="Busca aquí" /> </Nav.Item>
      </Nav>
      <Nav pullRight>
      </Nav>
      <Nav pullRight>
        <Nav.Item onClick={() => {
          navigate("/OrderCart")
        }}><FontAwesomeIcon icon={faShoppingCart} /> ({cantidadProductos()}) Revisar Orden</Nav.Item>
      </Nav>
    </Navbar>

  )
};

export function NavMenuUnder() {
  const [active, setActive] = useState("desayuno");//se indica desayuno para que asi en el momento que cargue la pagina, el menú del desayuno sea lo primero que se vea
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

