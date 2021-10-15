import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <header className="site-header">
      <div className="container">
          <div className="pd-tb-15 pd-lr-40">
              <div className="flex flex-center flex-wrap">
                  <div className="col-5">
                      <nav className="nav">
                          <ul className="menu flex flex-wrap">
                              <li>
                                <Link to="/maestroProducto">Productos</Link>
                              </li>
                              <li>
                                <Link to="/maestroventa">Ventas</Link>
                              </li>
                              <li>
                                <Link to="/actualizarusuario">Usuarios</Link>
                              </li>
                              <li>
                                <Link to="/maestroUsuario">Administrador de usuarios</Link>
                              </li>
                          </ul>
                      </nav>
                  </div>
                  <div className="col-2">
                      <div className="site-branding">
                          <Link to="/" className="logo"> 
                            ZAPATICOS
                          </Link>
                      </div>
                  </div>
                  <div className="col-5 flex flex-center flex-end">
                  
                    <button onClick={() => loginWithRedirect()} className ="login button">Inicio de sesión</button>

                  </div>
              </div>
          </div>
      </div>
    </header>
  );
};

export default Header;
