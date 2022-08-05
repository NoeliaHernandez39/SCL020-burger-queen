import { faArrowRightToBracket, faCoffee, faKey, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "rsuite";
import 'App.css'
import { useNavigate, useSearchParams } from "react-router-dom";
import { BtnLogout } from "Components/btnLogout";
import PaginaContext from "utils/pagina.context";
const tiposComida = [
  {
    value: "desayuno",
    label: "Desayuno"
  },
  {
    value: "almuerzo",
    label: "Almuerzo"
  }
]
const CustomNav = ({ active, onSelect, ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <Navbar className="NavBarTable">

      <Navbar.Brand onClick={() => {
        if (searchParams.get("tipo") === "mesero") {
          navigate("/TableNumber")
        }
      }}>

        <img className="" style={{
          width: "50px",
          marginTop: "-10px"
        }} src="/image/SoloLogo.png" alt="" />
      </Navbar.Brand>

      <Nav {...props} activeKey={active} onSelect={onSelect} >
        
        <Nav.Item eventKey="desayuno">Desayuno</Nav.Item>
        <Nav.Item eventKey="almuerzo">Almuerzo</Nav.Item>

      </Nav>

      <Nav>
        <label>Mesa  {searchParams.get("mesa")}</label>
      </Nav>

      <Nav pullRight>
               <BtnLogout />
            </Nav>
    </Navbar>
  );
};

export function NavMenuUp() {
  const { setTipoComida, tipoComida } = useContext(PaginaContext);

  return (
    <>
      <Container>
        <div>
          <CustomNav appearance="tabs" active={tipoComida} onSelect={
            (valor) => {
              setTipoComida(valor);
            }} />
        </div>

      </Container>
    </>
  )
}