import { faArrowRightToBracket, faCoffee, faKey, faLaptop, faShoppingBasket, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "rsuite";
import 'App.css'
import { BtnLogout } from "Components/btnLogout";

const CustomNav = ({ active, onSelect, ...props }) => {
  return (
    <Navbar className="NavBarTable">
      <Navbar.Brand > </Navbar.Brand>
      <Nav pullRight>
               <BtnLogout />
            </Nav>
    </Navbar>
  );
};

export function NavTableUp() {
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