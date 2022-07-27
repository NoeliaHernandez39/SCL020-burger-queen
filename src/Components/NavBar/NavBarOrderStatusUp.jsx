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
        // navigate("/TableNumber")
        if (searchParams.get("tipo") === "mesero") {
          navigate("/TableNumber")
        }
      }}>
        {/* {
          true ? <div>verdadero</div> : <div>falso</div>
        } */}
        <img className="" style={{
          width: "50px",
          marginTop: "-10px"
        }} src="/image/SoloLogo.png" alt="" />


      </Navbar.Brand>
      <Nav pullRight>
               <BtnLogout />
            </Nav>
    </Navbar>
  );
};

export function NavOrderStatusUp() {
  const [active, setActive] = useState("");
  return (
    <>
      <Container>
        <div>
          <CustomNav appearance="tabs" active={active} onSelect={
            (valor) => {
              setActive(valor);
            }} />
        </div>

      </Container>
    </>
  )
}