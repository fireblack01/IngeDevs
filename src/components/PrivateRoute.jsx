import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";
import React from 'react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading)return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;
  return isAuthenticated ? (
  <>{children}</> 
  ) : (
  <div className="content">
    <div className="container mw-60 pd-tb-30 text-center">
      <div className="text-6xl text-red-600 mb-6">No estas autorizado, debes iniciar sesión.</div>
      <Link to="/" className="button">
        Ir al Inicio
      </Link>
    </div> 
  </div>
  );
};

export default PrivateRoute;
