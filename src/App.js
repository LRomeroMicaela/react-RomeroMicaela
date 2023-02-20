import React from "react";
import Navbar from "../src/componentes/Navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer mensaje="¡Hola! Bienvenido a Óptica Gaona." />
    </div>
  );
}

export default App;
