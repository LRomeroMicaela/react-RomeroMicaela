import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

import { CartContext } from "../../Context/CartContext";

import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");

    const referencia = doc(itemCollection, id);
    getDoc(referencia).then((ok) => {
      setProductoSeleccionado({
        ...ok.data(),
        id: ok.id,
      });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let producto = {
      ...productoSeleccionado,
      quantity: cantidad,
    };
    agregarAlCarrito(producto);
    cantidad > 0
      ? Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Producto agregado al carrito correctamente",
          showConfirmButton: false,
          timer: 1500,
        })
      : Swal.fire(
          "No se agregó correctamente el producto al carrito, vuelva a intentarlo"
        );
  };

  const cantSeleccionada = getQuantityById(Number(id));

  return (
    <ItemDetail
      productoSeleccionado={productoSeleccionado}
      onAdd={onAdd}
      inicial={cantSeleccionada}
    />
  );
};

export default ItemDetailContainer;

//con useParams traigo el parámetros dinámicos del objeto. o sea el id.
//traigo los productos de products mock, para encontrarlo uso el método find
//comparando el id del producto seleccionado con el del encontrado por find
// paso la funcion a onAdd a itemcount para el carrito
