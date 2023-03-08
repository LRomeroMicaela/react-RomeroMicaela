import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

const Item = ({ elemento }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={elemento.img}
          alt={elemento.nombre}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: 15 }}
            color="text.secondary"
            gutterBottom
            variant="h2"
            component="div"
          >
            {elemento.nombre}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {elemento.marca}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/item">
          <Button variant="outlined" size="small" color="primary">
            Detalle del producto
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;

//item se renderiza con cada producto en itemlist
//recibe de itemlist elemento, que son las propiedades de cada producto
