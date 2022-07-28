import { faArrowRightToBracket, faClipboardList, faCoffee, faKey, faLaptop, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
        {/* <Nav.Item onClick={()=>{
          navigate("/OrderCart?tipo=meseromesa="+ table)
        }}><FontAwesomeIcon icon={faShoppingCart} /> Revisar Orden</Nav.Item> */}
      </Nav>
      <Nav pullRight>
        <Nav.Item onClick={() => {
          navigate("/OrderCart")
        }}><FontAwesomeIcon icon={faShoppingCart} /> ({carritoCompra.length}) Revisar Orden</Nav.Item>
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

