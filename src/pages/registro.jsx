import { Link } from 'react-router-dom';
import React from 'react';
const Registro = () => {
  return ( 
    <div className="content">
      <div className="container mw-60 pd-tb-30">
        <div className="flex-form">
        <h2>Crea una cuenta</h2>
          <form>
              <label className="label" for="nombre">Ingrese su nombre: </label>
              <input type="text" name="nombre" placeholder="Pepito" required/>

              <label for="apellido">Ingrese su apellido: </label>
              <input type="text" name="apellido" placeholder="Perez" required/>
              
              <label for="telefono">Ingrese su telefono: </label>
              <input type="number" name="telefono"placeholder="3125471529" required />

              <label for="fecha-de-nacimiento">Ingrese su fecha de nacimiento: </label>
              <input type="date" name="fecha-de-nacimiento" required/>

              <label for="correo">Ingrese su correo: </label>
              <input type="email" name="correo" placeholder="example@sas.com" required/>

              <label for="contrasena">Ingrese su contrasena: </label>
              <input type="password" name="contrasena" placeholder="aksdj3211" required/>

              <button type="submit" className="button">Registrarme</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
