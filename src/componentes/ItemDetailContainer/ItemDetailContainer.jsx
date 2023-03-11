import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";

import ItemCount from "../ItemCount/ItemCount";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productoSeleccionado = products.find(
    (element) => element.id === Number(id)
  );
  console.log(id);

  const onAdd = (cantidad) => {
    console.log(`${cantidad} productos fueron agregados al carrito.`);
  };
  return (
    <div className={styles.contenedorTotal}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={productoSeleccionado.img}
            alt={productoSeleccionado.nombre}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productoSeleccionado.nombre}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Descripción: {productoSeleccionado.modelo}{" "}
              {productoSeleccionado.marca}
            </Typography>
          </CardContent>
          <ItemCount stock={productoSeleccionado.stock} onAdd={onAdd} />
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;

//con useParams traigo el parámetros dinámicos del objeto. o sea el id.
//traigo los productos de products mock, para encontrarlo uso el método find
//comparando el id del producto seleccionado con el del encontrado por find
// paso la funcion a onAdd a itemcount para el carrito
