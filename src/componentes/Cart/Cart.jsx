import React, { useContext, useState } from "react";

import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { CartContext } from "../../Context/CartContext";

import Form from "../Formulario/Form";

import Swal from "sweetalert2";

import styles from "../Cart/Cart.module.css";

const Cart = () => {
  const { cart, limpiarCarrito, obtenerTotalPrecio, borrarProd } =
    useContext(CartContext);
  const total = obtenerTotalPrecio();

  const clear = () => {
    Swal.fire({
      title: "¿Quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Vaciar",
      denyButtonText: `No vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarCarrito();
        Swal.fire("Vaciado exitosamente ", " ", "success");
      } else if (result.isDenied) {
        Swal.fire("Cancelado", " ", "error");
      }
    });
  };

  const [mostrarFinalizarCompra, setMostrarFinalizarCompra] = useState(false);

  //renderización

  return (
    <div>
      {!mostrarFinalizarCompra ? (
        cart.length > 0 ? (
          <div>
            <div>
              {cart.map((elemento) => {
                return (
                  <div key={elemento.id}>
                    <div className={styles.contenedorTotal}>
                      <Card sx={{ maxWidth: 375 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="250"
                            image={elemento.img}
                            alt={JSON.stringify(elemento.nombre)}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {JSON.stringify(elemento.nombre)}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                              Descripción:
                              {JSON.stringify(elemento.modelo)}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                              {JSON.stringify(elemento.marca)}
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                              {" $ "}
                              {JSON.stringify(elemento.precio)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <Button
                          variant="outlined"
                          onClick={() => borrarProd(elemento.id)}
                        >
                          Eliminar
                        </Button>
                      </Card>
                    </div>
                  </div>
                );
              })}
              <div className={styles.botones}>
                <h2 className={styles.total}>Total del carrito: $ {total}</h2>
                <div className={styles.boton}>
                  <Button
                    variant="contained"
                    onClick={() => setMostrarFinalizarCompra(true)}
                  >
                    Finalizar la Compra
                  </Button>
                </div>

                <div>
                  <Button variant="outlined" onClick={clear}>
                    Vaciar carrito
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <img
              className={styles.imagen}
              src="https://res.cloudinary.com/dx9cjeuqg/image/upload/v1680378043/undraw_empty_cart_co35_gjb4yy.svg"
              alt=""
            />
          </div>
        )
      ) : (
        <Form
          cart={cart}
          obtenerTotalPrecio={obtenerTotalPrecio}
          limpiarCarrito={limpiarCarrito}
        />
      )}
    </div>
  );
};

export default Cart;
