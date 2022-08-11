import React, { useContext } from "react";
import PaginaContext from "utils/pagina.context";
import { Col, FlexboxGrid, Grid, Notification, Placeholder, Row } from "rsuite";
import "App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPenToSquare,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export function ProductoItem({ dataItem, dondeEstoy, ...props }) {
  const { guardarCarrito, carritoCompra, quitarCarrito } =
    useContext(PaginaContext);

  const ObtenerCantidad = () => {
    let existe = carritoCompra.find((x) => x.id === dataItem.id); //buscamos por el id si es que dentro de carrito compra se encuentra el producto (en el item)

    if (existe === undefined) {
      return "0";
    } else {
      return existe.cantidad;
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
{/* 
                  const deleteProduct = (product) => {
        const inCart = cart.find(
            (productInCart) => productInCart.id === product.id
        );

        if (inCart.count >= 1) {
            setCart(
                cart.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCart((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...inCart, count: inCart.amount - 1 }
                } else return productInCart
            });
        }
    }; */}


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
                  <br></br>

                  {dondeEstoy === "carrito" ? (
                    <>

                      <button onClick={() => {
//                  (carritoCompra.filter(x=> x.id !==  ))
                      }}>
                        <FontAwesomeIcon icon={faTrashCan}
                        />
                      </button>

                      <button onClick={() => {}}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </Col>
              </Notification>
            </Row>
          </Grid>
        </FlexboxGrid>
      </div>
    </>
  );
}
