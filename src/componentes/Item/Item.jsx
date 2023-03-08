import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

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
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            '{elemento.nombre} {elemento.marca} {elemento.modelo}'
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;

//item se renderiza con cada producto en itemlist
//recibe de itemlist elemento, que son las propiedades de cada producto
