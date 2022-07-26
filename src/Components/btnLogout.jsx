import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "rsuite";
import Swal from "sweetalert2";

export function BtnLogout() {
    const navigate = useNavigate();
    return (
        <>
            <Nav.Item onClick={() => {
                Swal.fire({
                    title: 'NombreUsuario',
                    text: 'Estás seguro que deseas cerrar sesión?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Cerrar sesión',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            'Sesión cerrrada exitosamente!',
                            'Es hora de un merecido descanso.',
                            'success'
                        )
                        navigate("/")
                    }
                })
            }}><FontAwesomeIcon icon={faArrowRightToBracket} />  Cerrar Sesión</Nav.Item>
        </>
    )
}