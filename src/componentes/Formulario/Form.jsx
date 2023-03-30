import React, { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [msj, setMsj] = useState("");

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    }); //name es name, email y password, según el que se setee va a ser el que se complete del arreglo
  };
  const handleSubmit = (e) => {
    e.preventDefault();

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

    const passwSpace = userData.password.trim(); //compara si hay espacios en blanco
    const passwIsValid = userData.password === passwSpace; //devuelve un booleano
    if (!passwIsValid || userData.password.length < 5) {
      setError(true);
      setMsj(
        "La contraseña no debe tener espacios en blanco ni ser menor a 5 carácteres"
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
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <h1>{msj}</h1>}
    </div>
  );
};

export default Form;
