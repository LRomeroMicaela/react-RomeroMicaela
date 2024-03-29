import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import styles from "./ItemDetail.module.css";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ productoSeleccionado, onAdd, cantSeleccionada }) => {
  return (
    <div className={styles.contenedorTotal}>
      <Card sx={{ maxWidth: 375 }}>
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
              Descripción:
              {JSON.stringify(productoSeleccionado.modelo)}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {JSON.stringify(productoSeleccionado.marca)}
            </Typography>
            <Typography variant="h5" color="text.secondary">
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

export default ItemDetail;
