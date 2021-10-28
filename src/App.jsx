import Layout from 'layouts/Layout';
import Content from 'pages/content';
import Registro from 'pages/registro';
import Login from 'pages/login';
import ActualizarUsuario from 'pages/actualizarusuario';
import MaestroUsuario from 'pages/maestrousuario';
import RegistrarProducto from 'pages/registrarProducto';
import MaestroProducto from 'pages/maestroProducto';
import RegistrarVenta from 'pages/registrarventa';
import MaestroVenta from 'pages/maestroventa';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import 'styles/styles.css';
import 'styles/stylesL.css';
import 'styles/stylesM.css';
import 'styles/stylesC.css';
import PrivateRoute from 'components/PrivateRoute';

function App() {
  return (
    
      <Auth0Provider
        domain="auth-mintic-ingedevs.us.auth0.com"
        clientId="ijFepcC5ZzLyvSQMLYcIOziFHeRAnM1q"
        redirectUri={window.location.origin}
      >
        <div className='App'>
        <Router>
          <Layout>
            <Switch>
              <Route path='/registro'>
                <PrivateRoute>
                  <Registro />
                </PrivateRoute>
              </Route>
              <Route path='/login'>
                <PrivateRoute>
                <Login />
                </PrivateRoute>
                
              </Route>
              <Route path='/actualizarusuario'>
                <PrivateRoute>
                  <ActualizarUsuario />
                </PrivateRoute>
                
              </Route>
              <Route path='/maestrousuario'>
                <PrivateRoute>
                  <MaestroUsuario />
                </PrivateRoute>
              </Route>
              <Route path='/maestroProducto'>
                <PrivateRoute>
                  <MaestroProducto />
                </PrivateRoute>
              </Route>
              <Route path='/registrarProducto'>
                <PrivateRoute>
                  <RegistrarProducto />
                </PrivateRoute>
              </Route>
              <Route path='/registrarventa'>
                <PrivateRoute>
                  <RegistrarVenta />
                </PrivateRoute>
              </Route>
              <Route path='/maestroventa'>
                <PrivateRoute>
                  <MaestroVenta />
                </PrivateRoute>
              </Route>
              <Route path='/'>
                <Content />
              </Route>
            </Switch>
          </Layout>
        </Router>
        </div>
      </Auth0Provider>
    
  );
}

export default App;
