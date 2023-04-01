import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import Swal from "sweetalert2";

const Form = ({ cart, obtenerTotalPrecio, limpiarCarrito }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState(false);
  const [msj, setMsj] = useState(null);

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    }); //name es name, email y teléfono, según el que se setee va a ser el que se complete del arreglo
  };

  //id COMPRA
  const compraId = () => {
    ordenId.length > 0 ? (
      Swal.fire(
        "Su compra ha finalizado con éxito. El número de orden es: " +
          JSON.stringify(ordenId)
      )
    ) : (
      <h3>
        No se ha cargado correctamente el número de orden, por favor vuelva a
        cargar sus datos
      </h3>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let order = {
      buyer: userData,
      items: cart,
      total: obtenerTotalPrecio(),
    };

    let orderCollection = collection(db, "ordenesCompra");
    addDoc(orderCollection, order).then((ok) => {
      setOrdenId(ok.id);
      limpiarCarrito();
    });
    addDoc(orderCollection, order).catch((error) => console.log(error));

    cart.map((producto) => {
      let referenciaDoc = doc(db, "products", producto.id);
      updateDoc(referenciaDoc, { stock: producto.stock - producto.quantity });
    });

    //Validaciones del formulario
    if (userData.name.length < 5) {
      setError(true);
      setMsj("El nombre debe contener al menos 5 carácteres");
      return;
    }

    const incluye = userData.email.includes("@"); //si include es F, o sea no incluye @, se convierte a T y entra en el if.
    if (!incluye) {
      setError(true);
      setMsj("El email debe incluir @");
      return;
    }

    const phoneSpace = userData.telefono.trim(); //compara si hay espacios en blanco
    const phoneIsValid = userData.telefono === phoneSpace; //devuelve un booleano
    if (!phoneIsValid || userData.telefono.length < 10) {
      setError(true);
      setMsj(
        "El teléfono no debe tener espacios en blanco ni ser menor a 10 carácteres"
      );
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder=" Ingrese la contraseña"
          name="telefono"
          onChange={handleChange}
        />
        <Button type="submit" onClick={compraId()}>
          Comprar
        </Button>
      </form>
      <Link to="/">Seguir Comprando</Link>
      {error && <h1>{msj}</h1>}
    </div>
  );
};

export default Form;
