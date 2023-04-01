import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import styles from "./ItemDetailContainer.module.css";
import { CartContext } from "../../Context/CartContext";

import { getDoc, collection, doc } from "firebase/firestore";

import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";

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

  // const productoSeleccionado = products.find(
  //   (element) => element.id === Number(id)
  // );

  const onAdd = (cantidad) => {
    let producto = {
      ...productoSeleccionado,
      quantity: cantidad,
    };
    agregarAlCarrito(producto);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito correctamente",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const cantSeleccionada = getQuantityById(Number(id));

  return (
    <div className={styles.contenedorTotal}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={productoSeleccionado.img}
            alt={JSON.stringify(productoSeleccionado.nombre)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {JSON.stringify(productoSeleccionado.nombre)}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Descripción: {JSON.stringify(productoSeleccionado.modelo)}{" "}
              {JSON.stringify(productoSeleccionado.marca)}
              {" $ "}
              {JSON.stringify(productoSeleccionado.precio)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <ItemCount
          stock={productoSeleccionado.stock}
          onAdd={onAdd}
          inicial={cantSeleccionada}
        />
      </Card>
    </div>
  );
};

export default ItemDetailContainer;

//con useParams traigo el parámetros dinámicos del objeto. o sea el id.
//traigo los productos de products mock, para encontrarlo uso el método find
//comparando el id del producto seleccionado con el del encontrado por find
// paso la funcion a onAdd a itemcount para el carrito
