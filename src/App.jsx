import RhodesianInfoPage from 'pages/nuevoProducto';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/styles.css';


function App() {
  return (
    <div classnameName="App">
     
      <header>Aqui va el encabezado</header>

      <main>todo el contenido principal
      <Router>
          <Switch>
            <Route path='/nuevoProducto'>
              <nuevoProducto />
            </Route>

          </Switch>

      </Router>
      </main>
        
      <footer>este es el footer</footer>
    </div>
  );
}

export default App;
