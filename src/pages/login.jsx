import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
  return(
    <div className="content">
      <div className="container mw-60 pd-tb-30">
        <div>
          <form>
              <label for="correo">Ingrese su correo: </label>
              <input type="email" name="correo" placeholder="example@sas.com" required />

              <label for="Contrasena">Ingrese su contrasena: </label>
              <input type="password" name="contraseña" placeholder="aksdj3211" required />

              <input type="submit" value="Iniciar sesion" />
          </form>

          <button type="submit">Ingresar por mi cuenta de gmail</button>
          <Link to="/registro" className="registro">Quiero registrarme</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
