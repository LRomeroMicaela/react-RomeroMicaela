import React, { useContext } from "react";
import { Button } from "@mui/material";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";

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
        Swal.fire("Vaciado exitosamente ", " ", "sucess");
      } else if (result.isDenied) {
        Swal.fire("Cancelado", " ", "error");
      }
    });
  };

  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h2>{elemento.nombre}</h2>
            <h2>{elemento.marca}</h2>
            <h3>{elemento.modelo}</h3>
            <img src={elemento.img} alt="" />
            <h4>{elemento.precio}</h4>
            <h4>Cantidad: {elemento.quantity}</h4>
            <div>
              <Button onClick={() => borrarProd(elemento.id)}>Eliminar</Button>
            </div>
          </div>
        );
      })}
      <h2>Total del carrito: {total}</h2>
      <div>
        <button onClick={clear}>Vaciar carrito</button>
      </div>
    </div>
  );
};

export default Cart;
