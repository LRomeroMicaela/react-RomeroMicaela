import React from "react";


function Navbar(){
    return(
        <nav>
          <div className = "menu-logo">
           <img clasName = "menu-logo"src={ require ( '../img/logo_chico.jpg')}/>
          </div>
          <div className="menu-txt">
            <a className="menu">Carrito</a>
            <a className="menu">Ubicación</a>
          </div>
        </nav>
        );
      }


export default Navbar;

