import { faArrowRightToBracket, faCoffee, faKey, faLaptop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "rsuite";
import 'App.css'
import { useNavigate, useSearchParams } from "react-router-dom";
import { BtnLogout } from "Components/btnLogout";

const CustomNav = ({ active, onSelect, ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <Navbar className="NavBarTable">

      <Navbar.Brand onClick={() => {
          navigate("/TableNumber")
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
  const [active, setActive] = useState("desayuno");
  // comida es el valor que vamos a usar en el html, y el setComida es la funcion que va a actualizar la informacion de comida, y ademàs 
  // volvera a refrescar la pagina con esa nueva informacion
  // dentro del useState, a el valor por defecto en este caso [] significa que es un arreglo vacio o sin elementos
  // const [comidas, setComidas] = useState([]);
  // const comida = [
  //   {
  //     id: 1,
  //     nombre: "Pan con huevo",
  //     precio: 1500,
  //     tipo: "desayuno"
  //   },
  //   {
  //     id: 2,
  //     nombre: "Pan con queso",
  //     precio: 1000,
  //     tipo: "desayuno"
  //   },
  //   {
  //     id: 3,
  //     nombre: "fideos con salsa",
  //     precio: 3500,
  //     tipo: "almuerzo"
  //   },
  //   {
  //     id: 4,
  //     nombre: "fafafrita con carne",
  //     precio: 4550,
  //     tipo: "almuerzo"
  //   },
  // ]
  // useEffect es para que se ejecute lo que esta adentro d ela funcion, cuando la pagina carga
  // useEffect(() => {
  //   setComidas(
  //     comida.filter(x => x.tipo === active)
  //   );
  // }, [])
  return (
    <>
      <Container>
        <div>
          <CustomNav appearance="tabs" active={active} onSelect={
            (valor) => {
              setActive(valor);
            }} />
          {/* {
            comidas.map(comida => {

              return (
                <>
                  <div>
                    <label>Comida: {comida.nombre}</label> <br></br>
                    <label>Precio: ${comida.precio}</label>
                  </div>
                </>
              )
            })
          } */}

        </div>

      </Container>
    </>
  )
}