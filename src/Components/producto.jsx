import React, { useContext } from "react";
import PaginaContext from "utils/pagina.context";
import { Col, FlexboxGrid, Grid, Notification, Placeholder, Row } from "rsuite";
import "App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export function ProductoItem({ dataItem, ...props }) {
  const { guardarCarrito, carritoCompra, quitarCarrito } =
    useContext(PaginaContext);

  const ObtenerCantidad = () => {
    let existe = carritoCompra.find((x) => x.id === dataItem.id); //buscamos por el id si es que dentro de carrito compra se encuentra el producto (en el item)
 
    if (existe === undefined) {
      return "0";
    }else{
return existe.cantidad
    }
  };
  return (
    <>
      <div {...props}>
        <FlexboxGrid justify="center">
          <Grid>
            <Row>
              <Notification
                className="listaMenu"
                style={{
                  marginBottom: "5px",
                }}
              >
                <Col xs={24}>
                  <button
                    onClick={() => {
                      guardarCarrito(dataItem);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>

                  <label>{ObtenerCantidad()}</label>

                  <button
                    onClick={() => {
                      quitarCarrito(dataItem);
                    }}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>

                  <label>{dataItem.nombre}:</label>
                  <br></br>
                  <label>{dataItem.descripcion}</label>
                  <br></br>
                  <label>Precio: {dataItem.precio}</label>
                </Col>
              </Notification>
            </Row>
          </Grid>
        </FlexboxGrid>
      </div>
    </>
  );
}
