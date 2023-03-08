import React from "react";
import Navbar from "../src/componentes/Navbar/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Cart from "./componentes/Cart/Cart";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="*" element={<h1> Ruta no válida </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
