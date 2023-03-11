import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Item.module.css";
import { border } from "@mui/system";

const Item = ({ elemento }) => {
  return (
    <Card sx={{ width: 345, border: 1, borderRadius: 10, margin: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={elemento.img}
          alt={elemento.nombre}
        />
        <CardContent>
          <Typography
            sx={{ fontSize: 20, textAlign: "center", textDecoration: "none" }}
            color="text.secondary"
            gutterBottom
            variant="h2"
            component="div"
          >
            {elemento.nombre}
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign={"center"}>
            {elemento.marca}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={styles.boton}>
        <CardActions>
          <Link to={`/item/${elemento.id}`}>
            <Button variant="contained" size="small" color="primary">
              Detalle del producto
            </Button>
          </Link>
        </CardActions>
      </div>
    </Card>
  );
};

export default Item;

//item se renderiza con cada producto en itemlist
//recibe de itemlist elemento, que son las propiedades de cada producto
//link en boton (item/id) para ir al detalle de cada producto
