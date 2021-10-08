import Layout from 'layouts/Layout';
import Content from 'pages/content';
import Registro from 'pages/registro';
import Login from 'pages/login';
import ActualizarUsuario from 'pages/actualizarusuario';
import MaestroUsuario from 'pages/maestrousuario';
import RegistrarProducto from 'pages/registrarProducto';
import MaestroProducto from 'pages/maestroProducto';
import RegistrarVenta from 'pages/registrarventa';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import 'styles/stylesL.css';
import 'styles/stylesM.css';
import 'styles/stylesC.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <Route path='/registro' exact>
              <Registro />
            </Route>
            <Route path='/login' exact>
              <Login />
            </Route>
            <Route path='/actualizarusuario' exact>
              <ActualizarUsuario />
            </Route>
            <Route path='/maestrousuario' exact>
              <MaestroUsuario />
            </Route>
            <Route path='/maestroProducto' exact>
              <MaestroProducto />
            </Route>
            <Route path='/registrarProducto' exact>
              <RegistrarProducto />
            </Route>
            <Route path='/registrarventa' exact>
              <RegistrarVenta />
            </Route>
            <Route path='/' exact>
              <Content />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
